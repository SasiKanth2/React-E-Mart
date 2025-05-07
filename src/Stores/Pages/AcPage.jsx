import React from 'react'
import { acData } from '../data/ac'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const AcPage = () => {
  return (
    <>
    <Navbar />
    <div className='page-details'>
       {acData.map((item)=>{
         return(
             <div>
             <div className="page-img">
              <Link to={`/ac/${item.id}`}>
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

export default AcPage
