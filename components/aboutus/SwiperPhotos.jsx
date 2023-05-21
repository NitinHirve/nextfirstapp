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

const comments = [
    'Currencies Direct and BNT have been working together for over 5 years now. Our experience has been excellent. We have achieved a lot together in terms of technical capabilities, professionalism, domain knowledge',
    'Working along since 2011, Click a Waiter has been working with BNT Soft. The team at BNT is excellent in pressure-handling, with abundant knowledge and professional ethics.',
    'We worked with BNT from March 2015 to Feb 2016. BNT has provided an efficient service, maintaining quality and excellent technical skills in the payment space. They are extremely responsive and flexible in meeting our requirements.'
]

export default function SwiperPhotos() {
    return (
        <>
            <div style={{
  height: '300px!important',
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
                    <SwiperSlide>
                        <SwipCardPhoto />
                        {/* <img className="imgNew" src="images/1.jpg" /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwipCardPhoto />
                        {/* <img className="imgNew" src="images/2.jpg" /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwipCardPhoto />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwipCardPhoto />
                        {/* <img className="imgNew" src="images/4.jpg" /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwipCardPhoto />
                        {/* <img className="imgNew" src="images/5.jpg" /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwipCardPhoto />
                        {/* <img className="imgNew" src="images/6.jpg" /> */}
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}