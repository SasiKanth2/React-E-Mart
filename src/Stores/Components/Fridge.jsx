import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom';

const Fridge = () => {
    const firstfiveimages=fridgeData.slice(0,5);
  return (
    <>
    <h2>Fridge</h2>
    <div className="proSection">
    {firstfiveimages.map((items)=>{
        return(
         <div className='imgBox'>
          <Link to={'/fridge'}>
          <img  className='proimg'src={items.image} ></img>
          </Link>
            
         </div>
        )
    })}
    </div>
   
    </>
  )
}

export default Fridge
