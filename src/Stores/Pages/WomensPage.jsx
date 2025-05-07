import React from 'react'
import { womanData } from '../data/woman'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const WomensPage = () => {
  return (
    <>
  <Navbar />
   <div className='page-details'>
      {womanData.map((item)=>{
        return(
            <div>
            <div className="page-img">
              <Link to={`/womans/${item.id}`}>

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

export default WomensPage
