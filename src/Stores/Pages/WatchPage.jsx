import React from 'react'
import { watchData } from '../data/watch'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const WatchPage = () => {
  return (
    <>
    <Navbar />
     <div className='page-details'>
        {watchData.map((item)=>{
          return(
              <div>
              <div className="page-img">
                <Link to={`/watches/${item.id}`}>
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

export default WatchPage
