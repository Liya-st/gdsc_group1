import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound.jsx';
import HomePage from './Pages/HomePage.jsx';
import List from './Pages/List.jsx';
import Cart from './Pages/Cart.jsx';
import Product from './Pages/Product.jsx';
import { SContextProvider } from './Contexts.jsx';
import Checkout from './Pages/Checkout.jsx';
export default function App() {
  return (
    <SContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<PageNotFound/>} />
        <Route path="/products" element={<List />} />
        <Route path="/contact" element={<PageNotFound/>} />
        <Route path="/cart" element = {<Cart />} />
        <Route path ='/checkout' element={<Checkout />} />
        <Route path="/product/:id" element = {<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </SContextProvider>
  );
}