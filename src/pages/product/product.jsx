import React, { useEffect, useState } from 'react'
import './product.scss'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import useFetch from '../../usehooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../components/Store/CartSlice';
import { addToFav } from '../../components/Store/FavSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PuffLoader } from 'react-spinners';


const Product = () => {
  const dispatch = useDispatch()
  

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setquantity] = useState(1);
  const [addFavorites, setFavorites] = useState(null);

  const {id} = useParams()



  const {data, loading} =  useFetch(`/products/${id}?populate=*`)
  const res = data?.data.data.attributes;



  const imgs = [`${res?.img?.data?.attributes?.url}`,
  `${res?.img2?.data?.attributes?.url}`]

  const imgHandler = (activeNum) => {
    setSelectedImg(activeNum);
  }

  

  const skItem = () => {
    return (
      <PuffLoader color="#758467" />
    )
  }
    



  return (
    <>
    {loading ? 
    
    <div className="loading">
                {skItem()}
     </div>
   
    :
    <div className="product">
        <ContentWrapper>
        <ToastContainer  theme='dark' type='success' position='bottom-right' progressClassName={'Toastify__progress-bar-theme--light'}/>
          <div className="container flex">

          
          <div className="left">

            <div className="mainimg">
              <img src={imgs[selectedImg]} alt="" />
            </div>
          <div className="images">
            <img className={selectedImg === 0 ? 'activeImg' : ''} src={imgs[0]} alt="" onClick={() => imgHandler(0) }/>
            <img className={selectedImg === 1 ? 'activeImg' : ''} src={imgs[1]} alt="" onClick={() => imgHandler(1)}/>
          </div>

          </div>

          <div className="right">
            <h2 className="title">{res?.title}</h2>
            <p className="discription">
              {res?.desc}
            </p>
            <span className="price">${res?.price}</span>
            <div className="quantity">
              <button onClick={()=> setquantity(quantity > 1 ? quantity - 1 : 0)}>-</button>
              {quantity}
              <button onClick={()=> setquantity(quantity + 1)}>+</button>
            </div>

            <button className='addToCart' onClick={()=>{ 
              
              dispatch(addToCart({
              id : id,
              title : res?.title,
              img : `${res?.img?.data?.attributes?.url}`,
              disc : res?.sub_categories?.data[0].attributes.title,
              price : res?.price,
              quantity : quantity,

            }))
            toast(`Done ${quantity} Product Added To The Cart`)
            }}>
              <AddShoppingCartOutlinedIcon />
              ADD TO CART
            </button>
            <div className="Link">
              <div className="fav">

              <div className="item" onClick={()=> {
              setFavorites(id)
              dispatch(addToFav({
              id : id,
              title : res?.title,
              img : `${res?.img?.data?.attributes?.url}`,
              type: res?.sub_categories?.data[0].attributes.title,
              price : res?.price,
            
            }))
            toast(`Successfully Added To Favorites`)

            }}>
             
                 {addFavorites === id ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
                ADD TO FAV 
              </div>
              {/* <div className="item">
                <BalanceOutlinedIcon />
                ADD TO COMPARE
              </div> */}
              </div>
              <div className="info">
                <span>seller:
                  <span className="value">
                   {res?.seller}
                  </span>
                </span>
                <span>product type:
                  <span className="value">
                    {res?.sub_categories?.data[0].attributes.title}
                  </span>
                </span>
                <span>tag: <span className="value">{res?.Categorie},</span> {res?.sub_categories?.data.map((item) => (
                  <span className='value ml' key={item?.id}>
                    {item?.attributes.title},
                  </span>
                ))}</span>
              </div>

                {/* <hr />
              <div className="details">
                <span>DESCRIPITION</span>
                <span>ADDitional Information</span>
        
                <span>FAQ</span>
              </div> */}
            </div>
          </div>
          </div>
        </ContentWrapper>
      </div>
    }
      
    </>
  )
}

export default Product