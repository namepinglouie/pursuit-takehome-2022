// Contains all direct interactions with the Restaurant Model
import { pgKnex } from "../configs/db.config";
import { Restaurant } from "../util/types"
import { redisClient } from "../configs/cache.config";

export const addRestaurant = async (input: Omit<Restaurant, 'id'>): Promise<Restaurant> => {
    try {
        // Write Ahead Caching
        // TASK 1: Implement writing to the cache any new restaurants that get added to the backend
        // Note: We don't expect restaurant meta data to change very often but people may be reading this data often
        // Question: What type of eviction policy do we think would be best in this situation

        const [newRestaurant] = await pgKnex<Restaurant>('Restaurants').insert(input).returning('*');

        return newRestaurant;
    } catch (err) {
        console.error(err);
        throw new Error('Add Restaurant Failed -- DB Query')
    }
}

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
    try {
        // Cache Aside Implementation
        // STEP 1: Check if Restaurant exists in the cache
        // write function here
        const cachedRestaurant = await redisClient.get(`restaurant:${id}`);
        if (cachedRestaurant) {
            console.log('fetched from cache')
            return JSON.parse(cachedRestaurant);
        } else {
            console.log('fetched from postgres')
            // STEP 2: If Restaurant is not in the cache, check the db for the record
            const restaurant: Restaurant = await pgKnex<Restaurant>('Restaurants')
                .leftJoin('Reservations', 'Reservations.restaurantId', 'Restaurants.id')
                .first('Restaurants.*', pgKnex.raw('JSON_AGG("Reservations".*) as reservations'))
                .where({ 'Restaurants.id': id })
                .groupBy('Restaurants.id', 'Reservations.restaurantId');

            if (restaurant) {
                // STEP 3: If Restaurant is not in the cache, add record to the cache
                redisClient.set(`restaurant:${restaurant.id}`, JSON.stringify(restaurant), {
                    EX: 10
                });

                return restaurant;
            } else {
                return null;
            }
        }
    } catch (err) {
        console.error(err);
        throw new Error('Get Restaurant By ID -- DB Query')
    }
}

export const getRestaurants = async (input: any): Promise<Restaurant[]> => {
    try {
        return await pgKnex<Restaurant>('Restaurants')
            .leftJoin('Reservations', 'Reservations.restaurantId', 'Restaurants.id')
            .select('Restaurants.*', pgKnex.raw('JSON_AGG("Reservations".*) as reservations'))
            .groupBy('Restaurants.id', 'Reservations.restaurantId');
    } catch (err) {
        console.error(err);
        throw new Error('Get Restaurants -- DB Query')
    }
}