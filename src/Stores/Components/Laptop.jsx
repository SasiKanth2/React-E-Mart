import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom';
const Laptop = () => {
    const firstfiveimages=computerData.slice(0,5);
  return (
    <>
     <h2>Laptop</h2>
   <div className="proSection">
   {firstfiveimages.map((items)=>{
       return(
        <div className='imgBox'>
          <Link to={'/laptop'}>
          
           <img  className='proimg'src={items.image} ></img>
           </Link>
        </div>
       )
   })}
   </div>
    </>
  )
}

export default Laptop
