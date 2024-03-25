import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperConfig from "./Swiper.cofig";

import 'swiper/css';
import 'swiper/css/navigation';

function KitchensSlider({kitchensSliderConfig}) {
    return (
        <section className={'container kitchens-slider relative max-md:px-5'}>
            <h2 className={'text-sm font-semibold my-6'}>Mutfaklar</h2>
            <Swiper
                {...SwiperConfig}
            >
                {
                    kitchensSliderConfig.map((slide, i) => (
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