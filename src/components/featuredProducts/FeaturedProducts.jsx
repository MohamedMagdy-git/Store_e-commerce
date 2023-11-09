import React, { useEffect, useState } from 'react'
import './featuredProducts.scss'
import Card from '../card/Card'
import axios from 'axios'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { fethchDataFromApi } from '../../utils/api'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';


const FeaturedProducts = ({type,}) => {
    

    const [data, setData ] = useState()
    // const [products, setProducts] = useState([])
    
   
    //  fetch products data 
    const res = ()=> { fethchDataFromApi(`/products?populate=*&filters[type][$eq]=${type}`).then((res) => {

        setData(res?.data?.data)
    })}

        useEffect(()=> {

            res()

        }, [])
        // log(res)


    // console.log(data);


  return (
    <div className='featuredProducts'>
        <ContentWrapper>

        {type === 'featured' && (<>
        <div className="top">
            <h2 className="title">{type} products</h2>
            <p className='subtitle'>
            the best-selling items for product.
            </p>
        </div>
        <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          868: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >


            {data?.map((item, indexedDB) => (
        <SwiperSlide key={indexedDB}>
                <Card item={item} />
        </SwiperSlide>
            ))}
      
        </Swiper>
        </>)}

        {type === 'trending' && ( <>
        <div className="top">
            <h2 className="title">{type} products</h2>
            <p className='subtitle'>
            Top trending products to sell online in 2023.
            </p>
        </div>
        <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          868: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }}
        modules={[Navigation]}
        className="mySwiper"
      >


            {data?.map((item, indexedDB) => (
        <SwiperSlide key={indexedDB}>
                <Card item={item} />
        </SwiperSlide>
            ))}
      
        </Swiper>
        </>)}
        </ContentWrapper>
    </div>
  )
}

export default FeaturedProducts