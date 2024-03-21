import React from 'react';
import SwiperConfig, {CarouselImages} from "./Carousel.config";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import CarouselFilter from "./CarouselFilter";

function Carousel() {
    return (

        <Swiper
            className={'max-md:!hidden pointer-events-none'}
            {...SwiperConfig}
        >
            <CarouselFilter/>
            {CarouselImages.map((url, i) => (
                <SwiperSlide key={i}>
                    <div
                        className={'bg-cover bg-center h-[500px]'}
                        style={{backgroundImage: `url(${require(`${url}`)})`}}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carousel