import React from "react";
import Navbar from "./components/Navbar";
import {Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
const App = () => {
  return (
     <>
    <Navbar/>
    <Routes>
        <Route path="home" element={<Home/>}></Route>
        <Route path="contactus" element={<Contact/>}></Route>
    </Routes>
</>
  )
};

export default App;
