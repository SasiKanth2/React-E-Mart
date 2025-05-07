import React from 'react'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom';

const Tv = () => {
    const firstfiveimages=tvData.slice(0,5);
  return (
    <>
    <h2>Tv</h2>
    <div className="proSection">
    {firstfiveimages.map((items)=>{
        return(
         <div className='imgBox'>
          <Link to={'/tv'}>
            <img  className='proimg'src={items.image} ></img>
            </Link>
         </div>
        )
    })}
    </div>
   
    </>
  )
}

export default Tv
