import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart"
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { useState } from "react";

const App = () => {
  const [cart,setCart] = useState([])
  return (
    <div>
      <ThemeContext.Provider value={{cart:cart, setcart:setCart}}>
        <Announcement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
