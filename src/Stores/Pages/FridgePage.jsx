import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const FridgePage = () => {
  return (
    <>
  <Navbar />
   <div className='page-details'>
      {fridgeData.map((item)=>{
        return(
            <div>
            <div className="page-img">
              <Link to={`/fridge/${item.id}`}>
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

export default FridgePage
