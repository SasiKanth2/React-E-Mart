import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom';

const WomanWear = () => {
    const firstfiveimages=womanData.slice(0,5);
  return (
    <>
   <h2>Woman Fashion</h2>
   <div className="proSection">
   {firstfiveimages.map((items)=>{
       return(
        <div className='imgBox' >
          <Link to={'/womenfashion'}>
         
           <img  className='proimg'src={items.image} ></img>
           </Link>
        </div>
       )
   })}
   </div>
  
   </>
  )
}

export default WomanWear
