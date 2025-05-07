import React from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const KitchenPage = () => {
  return (
    <>
    <Navbar />
     <div className='page-details'>
        {kitchenData.map((item)=>{
          return(
              <div>
              <div className="page-img">
                <Link to={`/kitchen/${item.id}`}>
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

export default KitchenPage
