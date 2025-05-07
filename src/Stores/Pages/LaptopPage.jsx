import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const LaptopPage = () => {
  return (
    <>
    <Navbar/>
     <div className='page-details'>
        {computerData.map((item)=>{
          return(
              <div>
              <div className="page-img">
                <Link to={`/laptop/${item.id}`}>
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

export default LaptopPage
