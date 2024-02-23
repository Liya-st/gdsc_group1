import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import { product } from '../Components/product';
import { SContext } from '../Contexts';
import "./Cart.css"
export default function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(SContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div className='cart'>
        <h2 className='font-bold text-3xl text-center m-5'>Your Cart</h2>
       
     

        {totalAmount > 0 ? (
            <div>
               <div className ='cart-item'>
               {product.map((product) => {
                 const quantity = cartItems[product.id];
                 if (quantity > 0) {
                   return (
                     <div key={product.id} className="cartItem">
                       <div className="description">
                         <p>
                           <b>{product.name}</b>
                         </p>
                         <p>Price: ${product.price}</p>
                         <p>Quantity: {quantity}</p>
                       </div>
                     </div>
                   );
                 }
                 return null;
               })}
             </div>
          <div className="checkout">
            <p className='m-10 font-medium'>Subtotal: ${totalAmount}</p>
            <button className ='btn'onClick={() => { checkout(); navigate('/checkout'); }}> Checkout </button>
          </div>
          </div>

        ) : (
            <>
          {/* <h1 className='mt-10 text-2xl font-bold text-center'>Your Cart is Empty</h1> */}
          <img src ="../Resources/emptycart.png" className='w-[850px] h-[400px] m-auto mt-5 rounded ' alt='empty cart'></img>
          </>
        )}
         <p className='font-semibold text-xl mt-14'>
          Not ready to check out?{' '}
          <Link to="/products" className="font-bold italic">
            Continue Shopping
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
}