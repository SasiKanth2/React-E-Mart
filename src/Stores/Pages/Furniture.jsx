import React from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const Furniture = () => {

  return (
    <>
  <Navbar />
   <div className='page-details'>
      {furnitureData.map((item)=>{
        return(
            <div>
            <div className="page-img">
              <Link to={`/furniture/${item.id}`}>
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

export default Furniture
