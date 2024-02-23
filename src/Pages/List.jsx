import React from 'react';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import { product } from '../Components/product';
import Products from '../Components/Products';

export default function List() {
  const prod = product.map((item) => {
    return <Products id={item.id} img={item.img} key={item.id} />;
  });

  return (
    <div className="flex-col items-center">
      <Nav />
      <div className="w-full flex flex-col ml-20 m-10">
        <h1 className="text-3xl font-bold">Shop</h1>
        <h3 className="text-lg italic font-semibold">Welcome to our Product Showcase!</h3>
        <p className="text-base">Discover a curated collection of amazing products that will enhance your lifestyle.</p>
      </div>
      <div className="flex-row items-center">
        <div style={{ marginLeft: '50px', display: 'flex', flexDirection: 'row' }}>{prod}</div>
      </div>
      <button className="btn-category">Shop</button>
      <Footer />
    </div>
  );
}