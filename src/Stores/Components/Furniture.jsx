import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom';

const Furniture = () => {
    const firstfiveimages=furnitureData.slice(0,5);
  return (
    <>
    <h2>Furniture</h2>
    <div className="proSection">
    {firstfiveimages.map((items)=>{
        return(
         <div className='imgBox'>
          <Link to={'/furniture'}>
          <img  className='proimg'src={items.image} ></img>
          </Link>
            
         </div>
        )
    })}
    </div>
   
    </>
  )
}

export default Furniture
