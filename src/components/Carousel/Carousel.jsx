import React, { useEffect } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from '../Carousel/carousel.module.css';
import "swiper/css";
import CarouselLeftNavigation from '../Carousel/CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from '../Carousel/CarouselRightNavigation/CarouselRightNavigation'

const Controls = ({ data }) => {
    const Swiper = useSwiper();
    useEffect(() => {
        Swiper.slideTo(0, 1);
    }, [data]);
    return <></>
}
function Carousel ({ data, renderComponent }) {
    return (
        <div className={styles.wrapper}>
            <Swiper
                style={{padding: "opx 20px"}}
                initialSlide={0}
                modules={[Navigation]}
                slidesPerView={"auto"}
                spaceBetween={40}
                allowTouchMove
            >
                 <Controls data={data} />
                 <CarouselLeftNavigation />
                 <CarouselRightNavigation /> 
                 {data.map ((ele) => (
                    <SwiperSlide> {renderComponent(ele)} </SwiperSlide>
                 ))} 
            </Swiper>
        </div>
    )
}

export default Carousel;