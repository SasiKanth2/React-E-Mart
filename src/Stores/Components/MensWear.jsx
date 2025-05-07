import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom';
const MensWear = () => {
    const firstfiveimages=menData.slice(0,5);
  return (
    <>
   <h2>MensWear</h2>
   <div className="proSection">
   {firstfiveimages.map((items)=>{
       return(
        <div className='imgBox'>
          <Link to={'/menfashion'}>
           <img  className='proimg'src={items.image} ></img>
           </Link>
        </div>
       )
   })}
   </div>
  
   </>
  )
}

export default MensWear
