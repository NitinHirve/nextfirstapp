import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay
} from "swiper/core";

import SwipCardPhoto from './SwipCardPhoto'



SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const photosDetail = [
    '','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','','','','','','','','','',
    '','','','','','','','','','','','',
]

export default function SwiperPhotos() {
    return (
        <>
            <div style={{
  height: '150px!important',
  width: '100%',
  backgroundColor: '#fff',
  display: 'block',
  marginTop:'20px'
            }}>
                <Swiper
                    style={{
                        "--swiper-navigation-size": "30px",  //font-size: var(--swiper-navigation-size);
                        width: '100%!important',
                        height: '200px!important'
                    }}
                    navigation={true}
                    // centeredSlides={true}
                    slidesPerView={ 'auto'}
                    loop={true}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    pagination={{
                        clickable: true
                    }}
                    className="mySwiper"
                >

            {
                photosDetail.map((e,i)=><>
                <SwiperSlide>
                        <SwipCardPhoto imageIndex={i} />
                    </SwiperSlide>
                </>)
                    
                
                
            }
                   
                </Swiper>
            </div>
        </>
    );
}