import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Home from "./Page/Home/Home";
import Crop from "./Page/Crop/Crop";
import Schemes from "./Page/GovtSchemes/GovtSchemes";
import MarketPrice from "./Page/MarketPrice/MarketPrice";
import Weather from "./Page/Weather/Weather";
import Contact from "./Page/Contact/Contact";
import Login from "./Component/Login/Login";
import Register from "./Component/Register as farmer/Register as farmer";
import Footer from "./Layout/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/marketPrice" element={<MarketPrice />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />




        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;