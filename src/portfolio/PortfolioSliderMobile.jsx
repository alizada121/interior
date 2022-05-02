import { Swiper, SwiperSlide } from 'swiper/react';

import portfolio1 from "../assets/portfolio3.png"
import portfolio2 from "../assets/portfolio2.png"
import portfolio3 from "../assets/portfolio3.png"

// Import Swiper styles
import 'swiper/css';

import "../portfolio/PortfolioSliderMobile.css"

export default () => {
    
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1.3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide   > <img src={portfolio1} ></img></SwiperSlide>
      <SwiperSlide  >  <img src={portfolio2} ></img></SwiperSlide>
      <SwiperSlide  ><img src={portfolio3} ></img></SwiperSlide>
      
    </Swiper>
  );
};