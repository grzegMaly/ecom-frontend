import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Products } from "./components/products/Products";
import { Navbar } from "./components/Shared/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Toaster } from "react-hot-toast";
import React from "react";
import { Cart } from "./components/cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
      <Toaster position="bottom-center"/>
    </React.Fragment>
  );
}

export default App;
