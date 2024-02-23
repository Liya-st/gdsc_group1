import React from 'react'
import Nav from '../Components/Nav.jsx';
import Display from '../Components/Display.jsx';
import '../App.css';
import Footer from '../Components/Footer.jsx';
import { category } from '../Components/category.js';
import {product} from '../Components/product.js';
import { arrival } from '../Components/arrival.js';
import Intro from '../Components/Intro.jsx';
import { Link } from 'react-router-dom';
export default function HomePage() {
    const categ = category.map(item =>{
        return(
        <Display img ={item.img}/>
        )
     })
     const prod = product.map(item =>{
        return (
         <Display img ={item.img}/>
        )
     })
     const arriv = arrival.map(item =>{
        return (
         <Display img ={item.img}/>
        )
     })
   
   return (
    <>
     <Nav />
     <Intro/>
     <div className = "Categories--container">
     <h1 className='text-center text-2xl font-bold m-4'>Categories</h1>
      <p>Discover a wide range of high-quality products at Lotus Retail. Elevate your shopping experience with Lotus Retail today</p>
      <button className ='btn' ><Link to ='/products'>Categories</Link></button>
      <div className ='categories'>
       {categ}
      </div>
     </div>
      <div className="new-arrivals">
      <h1 className='text-center text-2xl font-bold m-4'>Our Latest Arrivals</h1>
      <p>Discover a wide range of high-quality products at Lotus Retail. Elevate your shopping experience with Lotus Retail today</p>
      <button className ='btn'><Link to ='/products'>New Arrivals</Link></button>
      <div className ='arrivals'>
      {arriv}
       </div>
      </div>
     <div className = 'product--container'>
     <h1 className='text-center text-2xl font-bold m-4'>Our Products</h1>
         <p>Discover a wide range of high-quality products at Lotus Retail. Elevate your shopping experience with Lotus Retail today</p>
         <button className ='btn'><Link to ='/products'>Products</Link></button>
     <div className='products'>
       
    {prod}
     </div>
     </div>
     <Footer/>
    </> 
   )
}
