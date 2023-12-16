// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/views/Home";
import Drink from "../src/views/Drinks";
import Food from "../src/views/Foods";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<Drink />} />
          <Route path="/foods" element={<Food />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
