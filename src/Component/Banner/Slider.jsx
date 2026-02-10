
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Banner3></Banner3></SwiperSlide>
        <SwiperSlide><Banner2></Banner2></SwiperSlide>
        <SwiperSlide><Banner1></Banner1></SwiperSlide>
        
      </Swiper>
    </>
  );
}