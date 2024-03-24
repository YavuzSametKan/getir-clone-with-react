import React from 'react';
// import Swiper core and required modules
import {Navigation} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import kitchenSliderConfig from "./KitchenSlider.config";

function KitchensSlider() {
    return (
        <section className={'container kitchens-slider relative max-md:px-5'}>
            <h2 className={'text-sm font-semibold my-6'}>Mutfaklar</h2>
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                loop
                navigation
                className={'h-28'}
                breakpoints={{
                    0: {
                        slidesPerView: 2
                    },
                    432: {
                        slidesPerView: 3
                    },
                    640: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 6,
                    },
                    1024: {
                        slidesPerView: 8,
                    },
                }}
            >
                {
                    kitchenSliderConfig.map((slide, i) => (
                        <SwiperSlide className={'bg-white rounded-lg overflow-hidden cursor-pointer'} key={i}>
                            <div className={'flex flex-col w-full h-full'}>
                                <div className={'h-full w-full flex items-start justify-center'}>
                                    <img
                                        src={slide.src}
                                        alt="kitchens category"
                                        className={'w-[76px] select-none'}/>
                                </div>
                                <div className={'border-t border-gray-100 w-full'}></div>
                                <div className={'text-sm text-brand py-2 flex items-center justify-center select-none max-md:text-xs'}>
                                    {slide.title}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default KitchensSlider;