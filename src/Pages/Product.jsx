import React,{ useState, useContext} from 'react'
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import { useParams } from 'react-router-dom';
import {product} from '../Components/product';
import './product.css';
import {SContext} from '../Contexts';
export default function Product() {
  const { id } = useParams(); 
  console.log('Product ID:', id);
  const prod = product.find((prod) => prod.id === Number(id)); 

  if (!prod) {
    return <div>product not found.</div>; 
  }
 
  const [quantity, setQuantity] = useState(1);
  const [outputMessage, setOutputMessage] = useState('');
  const { addToCart } = useContext(SContext);
  const { name, price,img } = prod;
  const handleClick = () => {
    addToCart(id, quantity);
    setQuantity('');
    setOutputMessage('Item added to cart!');
  };
  return (
    <div>
        <Nav />
        <div className='prod-detail'>
        <img className='prod-img' src ={img}/>
          <div className='p-d'>
        <h1 className='font-bold'>{name}</h1>
        <p className='italic text-xs'>Price: ${price}</p> 
        <p className='font-bold italic'>Description</p>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum excepturi similique fugiat voluptas debitis quae, 
          voluptates nesciunt atque ea corrupti facilis facere aliquam maxime quaerat. libero similique voluptatibus distinctio laudantium</p>
          <div className="flex flex-row mt-5">
  
  <label htmlFor="quantity" className="ml-5 font-semibold">Quantity</label>
  <span>
  <input
  type="number"
  id="quantity"
  min={1}
  className="border-2 border-stone-500 rounded bg-green-50 w-10 ml-3 mr-5" value={quantity}
  onChange={(e) => setQuantity(parseInt(e.target.value))}
/>
</span>
<button className="btn-cart" onClick={handleClick}>
  Add to cart
</button>
{outputMessage && <p>{outputMessage}</p>}
</div>
        </div>
        </div>
        <Footer />
    </div>
  )
}
