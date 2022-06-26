import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "../src/components/Navbar.js";

import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import Show from "./pages/Show.js";
import Edit from "./pages/Edit.js";
import New from "./pages/New.js";

import Index2 from "./pages/Index2.js";
import Show2 from "./pages/Show2.js";
import New2 from "./pages/New2.js";

export default function App() {
  return(
    <div>
      <Router>
        <main>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/restaurants" element = {<Index />} />
            <Route path = "/restaurants/new" element = {<New />} />
            <Route path = "/restaurants/:id" element = {<Show />} />
            <Route path = "/restaurants/:id/edit" element = {<Edit />} />
            <Route path = "/reservations" element = {<Index2 />} />
            <Route path = "/reservations/new" element = {<New2 />} />
            <Route path = "/reservations/:id" element = {<Show2 />} />
            
          </Routes>
        </main>
      </Router>
    </div>
  )
};