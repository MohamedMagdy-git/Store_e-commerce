import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  // medium_
  // console.log(`http://localhost:1337/uploads/medium_` + `${(item?.attributes?.img?.data?.attributes.url)}g`.slice(9,-1))
  // if(item?.attributes?.type === type){
  return (
    <div>
    
    <Link className='card-container' to={`/product/${item?.id}`}>
      <div className='card-bg'>
      <div className='card'>
          {item?.attributes?.isNew && (<span className="new">New</span>)}
        <div className="images">
         
          <img src={`${(item?.attributes?.img?.data?.attributes.url)}`} alt="" className="mainImg" />
          <img src={`${(item?.attributes?.img2?.data?.attributes.url)}`} alt="" className="secImg" />
        </div>
      </div>
        <h2 className="title">{item?.attributes?.title?.slice(0,15)}</h2>
        <div className="prices">
          <h3 className='oldPerice'>{item?.attributes?.oldPrice ? `$ ${item?.attributes?.oldPrice}` : ''}</h3>
          <h3 className='nowPrice'>$ {item?.attributes?.price}</h3>
      </div>
      </div>
    </Link>
    </div>
  )
}
// }

export default Card