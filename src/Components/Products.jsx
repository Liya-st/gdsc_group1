import React from 'react';
import { Link } from 'react-router-dom';

export default function Products({ id, img }) {
  return (
    <div>  
      <Link to={`/product/${id}`}>
        <img src={img} className='product--img hover:scale-105 ease-in-out duration-300' alt="Product" />
      </Link>
    </div>
  );
}