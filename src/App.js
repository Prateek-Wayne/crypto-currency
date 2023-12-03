import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";
import CryptoCurrencies from "./components/CryptoCurrencies/CryptoCurrencies";
import News from "./components/News/News";
import "./App.css";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {
  return (
    <div className="main">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
        </Routes>
        <Routes>
          <Route path="/crypto/:id" element={<CryptoDetails />} />
        </Routes>
        <Routes>
          <Route path="/news" element={<News />} />
        </Routes>
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
