import React from 'react'
import { computerData } from '../data/computers'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { usecart } from '../UseContext/CartProvider';

const Laptop = () => {
    const {id}=useParams();
    const product=computerData.find((item)=>item.id===id);

    const{cartitems,addtocart}=usecart();
  return (
   <>
   <Navbar />
   <div className="ind-page">
    <div className="ind-img">
        <img src={product.image}></img>
    </div>
    <div className="ind-details">
        <div className="ind-company">
            {product.company}
        </div>
        <div className="ind-moel">
            {product.model}
        </div>
        <div className="ind-price">
            {product.price}
        </div>
        <div className="ind-desc">
            <p>{product.description}</p>
        </div>
        <button className='add-to-cart' onClick={()=>addtocart(product)}>
          Add to cart
        </button>
    </div>
   </div>
   </>
  )
}

export default Laptop
