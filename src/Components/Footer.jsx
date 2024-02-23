import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-950 py-4 text-center bottom-0  w-full">
      <p className="text-gray-100">© {new Date().getFullYear()} Lotus Retail. All rights reserved.</p>
      <nav>
        <a href="/" className="text-gray-200 hover:text-gray-800 mx-2">Home</a>
        <a href="/about" className="text-gray-100 hover:text-gray-800 mx-2">About</a>
        <a href="/products" className="text-gray-100 hover:text-gray-800 mx-2">Products</a>
        <a href="/contact" className="text-gray-100 hover:text-gray-800 mx-2">Contact</a>
      </nav>
    </footer>
  );
}