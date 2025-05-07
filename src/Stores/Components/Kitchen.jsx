import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom';

const Kitchen = () => {
    const firstfiveimages=kitchenData.slice(0,5);
  return (
    <>
   <h2>Kitchen</h2>
   <div className="proSection">
   {firstfiveimages.map((items)=>{
       return(
        <div className='imgBox'>
          <Link to={'/kitchen'}>
           <img  className='proimg'src={items.image} ></img>
           </Link>
        </div>
       )
   })}
   </div>
  
   </>
  )
}

export default Kitchen
