import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import PlaceToStay from "./screens/PlaceToStay";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
