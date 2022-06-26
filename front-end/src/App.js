import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "../src/components/Navbar.js";

import Home from "./pages/Home.js";
import Index from "./pages/Index.js";
import Show from "./pages/Show.js";
import Edit from "./pages/Edit.js";
import New from "./pages/New.js";

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
          </Routes>
        </main>
      </Router>
    </div>
  )
};