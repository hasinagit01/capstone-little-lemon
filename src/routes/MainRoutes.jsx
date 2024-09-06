import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home"
import Menu from "../pages/Menu"
import AboutUs from "../pages/AboutUs"
import Profile from "../pages/Profile"
import Booking from "../pages/Booking"

const Main = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
}

export default Main
