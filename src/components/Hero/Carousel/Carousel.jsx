import React from 'react';
import SwiperConfig, {CarouselImages} from "./Carousel.config";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'

function Carousel() {
    return (
        <Swiper
            className={'max-md:!hidden pointer-events-none'}
            {...SwiperConfig}
        >
            {CarouselImages.map((url, i) => (
                <SwiperSlide key={i}>
                    <div
                        className={'bg-cover bg-center h-[500px]'}
                        style={{backgroundImage: `linear-gradient(to left, transparent, #4c3398), url(${url})`}}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel