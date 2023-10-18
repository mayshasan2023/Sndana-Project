import React from "react";
import "../src/styles/styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Details from "./pages/Details";
function App() {
  return (
    <div classname="App">
      <Navbar sticky="top" />
      <Routes>
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
