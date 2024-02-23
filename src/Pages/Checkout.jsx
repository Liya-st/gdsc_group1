import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
export default function Checkout() {
  return (
    <div>
    <Nav />
    <div className="w-96 mx-auto mt-20 p-8 bg-green-200 rounded-lg shadow-md mb-56">
      <h2 className="text-2xl font-bold mb-4">Thank you for your purchase!</h2>
      <p className="text-lg mb-4">Your order has been confirmed.</p>
      <p className="text-lg mb-4">An email with the order details has been sent to your email address.</p>
      <p className="text-lg">
        If you have any questions or concerns, please contact us.
      </p>
    </div>
  <Footer />
  </div>)
}
