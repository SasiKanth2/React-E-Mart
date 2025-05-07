import React from 'react'
import { Link } from 'react-router-dom'
import { usecart } from '../UseContext/CartProvider'

const Navbar = () => {
  const{cartitems}=usecart();
  return (
    <>
    <div className="nav">
        <Link to={'/'}>
        <div className="title">
            E-Mart
        </div>
        </Link>
        <div className="search">
            <input type='text' placeholder='search'></input>
        </div>
        <div className="sign">
            Signin/Signup
        </div>
        <div className="cart">
          <Link to={'/cart'}>
            Cart
            <span>
              {cartitems.length}
            </span>
            </Link>
        </div>
<div className="tags">
<ul>         
            <Link to={'/mobile'} >
            <li>Mobiles</li>
            </Link>
            
            <Link to={'/laptop'}>
            <li>Laptop</li>
            </Link>
            
            <Link to={'/watch'}>
            <li>Watches</li>
            </Link>
           
           <Link to={'/menfashion'}>
           <li>Mens Wear</li>
            </Link>
           
           <Link to={'/womenfashion'}>
           <li>Women Wear</li>
           </Link>
           
           <Link to={'/ac'}>
           <li>Ac</li>
           </Link>
           
           <Link to={'/tv'}>
           <li>Tv</li>
           </Link>
           
           <Link to={'/furniture'}>
           <li>Furniture</li>
           </Link>
            
            <Link to={'/fridge'}>
            <li>Fridge</li>
            </Link>
          
          <Link to={'/kitchen'}>
          <li>Kitchen</li>
          </Link>
           
        </ul>
</div>
       
    </div>
    </>
  )
}

export default Navbar
