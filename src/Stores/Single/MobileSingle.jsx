import React from 'react'
import { mobileData } from '../data/mobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import { usecart } from '../UseContext/CartProvider';

const MobileSingle = () => {
    const {id}=useParams();
    const product=mobileData.find((item)=>item.id===id);
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
            <div className="ind-model">
                {product.model}
            </div>
            <div className="ind-price">
                {product.price}
            </div>
            <div className="ind-desc">
                {product.description}
            </div>
            <button className="add-to-cart" onClick={()=>addtocart(product)}>
                Add to cart
            </button>
        </div>
     </div>
    </>
  )
}

export default MobileSingle
