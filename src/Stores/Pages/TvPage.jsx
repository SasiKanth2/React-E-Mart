import React from 'react'
import { tvData } from '../data/tv'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const TvPage = () => {
  return (
    <>
    <Navbar />
     <div className='page-details'>
        {tvData.map((item)=>{
          return(
              <div>
              <div className="page-img">
                <Link to={`/tv/${item.id}`}>
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

export default TvPage
