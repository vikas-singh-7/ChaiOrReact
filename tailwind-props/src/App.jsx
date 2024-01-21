import React from "react";
import Navbar from "./components/Navbar";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import Car from "./pages/Car";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<Aboutus />}></Route>
        <Route path="/contact" element={<Contactus />}></Route>
        <Route path="/car" element={<Car/>}></Route>
      </Routes>
    </>
  );
};

export default App;
