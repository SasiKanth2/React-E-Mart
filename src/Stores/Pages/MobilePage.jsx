import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const MobilePage = () => {
  return (
  <>
  <Navbar />
   <div className='page-details'>
      {mobileData.map((item)=>{
        return(
            <div>
             
            <div className="page-img">
            <Link to={`/mobiles/${item.id}`}>
            <img src={item.image}></img>  
            </Link>
               
            </div>
            <div className="page-model">
            {item.company},{item.model}
          </div>
           </div>                 
           
        )
      })}
      </div>
  </> 
  )
}

export default MobilePage
