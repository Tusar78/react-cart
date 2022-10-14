import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
