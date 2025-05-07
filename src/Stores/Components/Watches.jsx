import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom';

const Watches = () => {
    const firstfiveimages=watchData.slice(0,5);
  return (
    <>
    <h2>Watches</h2>
    <div className="proSection">
    {firstfiveimages.map((items)=>{
        return(
         <div className='imgBox'>
          <Link to={'/watch'}>
          <img  className='proimg'src={items.image} ></img>
          </Link>
           
         </div>
        )
    })}
    </div>
    </>
    
  )
}

export default Watches
