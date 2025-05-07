import React from 'react'
import { menData } from '../data/men'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const MensPage = () => {
  return (
    <>
  <Navbar />
   <div className='page-details'>
      {menData.map((item)=>{
        return(
            <div>
            <div className="page-img">
              <Link to={`/mens/${item.id}`}>
              <img src={item.image}></img>
              </Link>
               
            </div>
            <div className="page-model">
            {item.brand},{item.model}
          </div>
           </div>                 
           
        )
      })}
      </div>
  </> 
  )
}

export default MensPage
