import React from 'react'
import { usecart } from './CartProvider'
import Navbar from '../Components/Navbar';

const CartUsage = () => {
    const{cartitems,addtocart,removecart}=usecart();

  return (
   <>
   <Navbar />
   <h2 className='Y-cart'>Your Cart</h2>
   {cartitems.length===0 ? (<p>Cart is empty</p> ):(
   
      <div>
        {cartitems.map((items)=>(
          
          <div className="cart-info">
            <div className="cart-img">
                <img src={items.image}></img>
            </div>
            <div className="cart-details">
                <div className="cart-company">{items.company}</div>
                <div className="cart-model">{items.model}</div>
                <div className="cart-price">{items.price}</div>
            </div>
            <div className="remove-cart">
            <button onClick={()=>removecart(items)}>
                Remove
            </button>
            </div>
          </div>

        ))}
      </div>
       

   )
   


}
   

    
  
   
   </>
  )
}

export default CartUsage
