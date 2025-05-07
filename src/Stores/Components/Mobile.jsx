import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'

const Mobile = () => {
     const firstfiveimages=mobileData.slice(0,5)
  return (
   <>
   <h2>Mobiles</h2>
   <div className="proSection">
   {firstfiveimages.map((items)=>{
       return(
        <div className='imgBox'>
         <Link to={'/mobile'}>
         <img  className='proimg'src={items.image} ></img>
         </Link>
          
        </div>
       )
   })}
   </div>
  
   </>
  )
}

export default Mobile
