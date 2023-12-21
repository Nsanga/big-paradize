// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/views/Home";
import Drink from "../src/views/Drinks";
import Food from "../src/views/Foods";
import DrinkCategory from "./views/Drinks/DrinkCategory";
import { CategoryProvider } from "./CategoryContext";
import FoodCategory from "./views/Foods/FoodCategory";

const App = () => {
  return (
    <CategoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinks" element={<Drink />} />
          <Route path="/foods" element={<Food />} />
          <Route path="/drink-category/:category" element={<DrinkCategory />} />
          <Route path="/food-category/:category" element={<FoodCategory />} /> 
        </Routes>
      </BrowserRouter>
    </CategoryProvider>
  );
};

export default App;
