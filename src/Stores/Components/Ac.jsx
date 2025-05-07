import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom';

const Ac = () => {
    const firstfiveimages=acData.slice(0,5);
  return (
    <>
    <h2>Ac</h2>
    <div className="proSection">
    {firstfiveimages.map((items)=>{
        return(
         <div className='imgBox'>
          <Link to={'/ac'}>
          <img  className='proimg'src={items.image} ></img>
          </Link>
          
         </div>
        )
    })}
    </div>
   
    </>
  )
}

export default Ac
