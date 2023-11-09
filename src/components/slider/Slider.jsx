import { useRef, useState } from 'react'
import './slider.scss'
import poster1 from '../../assets/shop cover.jpg'
import poster2 from '../../assets/poster 2.jpg'
import poster3 from '../../assets/poster 3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.scss';

// import required modules
import { Autoplay ,EffectCreative, Navigation, Pagination } from 'swiper/modules';



const Slider = () => {
    const data = [
      poster3,
      poster1,
      poster2,
    ];


    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //   progressCircle.current.style.setProperty('--progress', 1 - progress);
    //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };



  return (
    <div className='slider'>
        <Swiper className="mySwiper"
            loop={true}
            spaceBetween={30}
            effect={'fade'}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            modules={[Autoplay,EffectCreative, Navigation, Pagination]}
        >
            <SwiperSlide>
           
            {/* <div className="title">Find your favorite clothing collection</div>
            <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.Velit totam ullam at suscipit. Harum soluta distinctio eum quidem rerum.</span> */}
            <img src={data[0]} alt=""/>
            <div className="opacity"></div>
          
            </SwiperSlide>
            <SwiperSlide>
            <img src={data[1]} alt=""/>
            <div className="opacity"></div>
            </SwiperSlide>
            <SwiperSlide>
            <img src={data[2]} alt=""/>
            <div className="opacity"></div>
            </SwiperSlide>
            
        </Swiper>
        {/* <div className="icons">
            <div className="icone">
                <ArrowForwardRoundedIcon />
            </div>
            <div className="icone">
                <ArrowBackRoundedIcon />
            </div>
        </div> */}
    </div>
  )
}

export default Slider