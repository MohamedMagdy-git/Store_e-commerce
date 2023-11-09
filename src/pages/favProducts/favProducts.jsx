/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteOutlineRounded } from '@mui/icons-material'
import { removeFavItem } from '../../components/Store/FavSlice'
import './favProducts.scss'
import { Link } from 'react-router-dom'
import empty from '../../assets/no-results.png'

const FavProducts = () => {
    // global state on redux
    const dispatch = useDispatch(); 
    const favProducts = useSelector((state) => state.fav.favs)

  // localStorage.setItem('favorite', favProducts[0])
 


  return (
    <div className='favProducts'>
        <ContentWrapper>
            <h3 className="titleSection">Favourite Products</h3>
            {favProducts.length === 0 ? 
             <>
             <div className="emptyFav">
              <img src={empty} alt="" />
              <h4 className="text">Favorite products are empty</h4>
             </div>
             </> 
             : 
             <>

             </>}
            <div className="favItems">
              {favProducts?.map((product) => (
                <div className="favItem"  key={product.id}>
                  <div className="image">
                    <div className="deleteitem" onClick={()=> dispatch(removeFavItem(product.id))} >
                      {/* <p className="delText">Delete</p> */}
                      <DeleteOutlineRounded className='delIcone' />
                    </div>
                  <Link to={`/product/${product?.id}`}>
                    <img src={product.img} alt="" />
                  </Link>
                  </div>
                  <div className="boxtext">
                    <h3 className="title">{product.title.slice(0,16)}</h3>
                    <div className="priceandtypebox">
                      <div className="price">$ {product.price}</div>
                      <div className="type">{product.type}</div>
                    </div>
                  </div>
                </div>

                
                
              ))}
            </div>
        </ContentWrapper>
    </div>
  )
}

export default FavProducts