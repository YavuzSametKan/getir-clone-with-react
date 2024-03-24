import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import CarouselFilter from "./CarouselFilter";

function Carousel({formVisibility, height, carouselSources, swiperConfig, isVideo, filter}) {
    const videoRef = useRef(carouselSources[0])
    const [videoTransitionActive, setVideoTransitionActive] = useState(false);

    useEffect(() => {
        if (isVideo) {
            const video = videoRef.current

            const handleVideoEnded = () => {
                setVideoTransitionActive(true)
                setTimeout(() => {
                    setVideoTransitionActive(false)
                    const currentIndex = carouselSources.findIndex(src => src === video.src)
                    const nextIndex = (currentIndex + 1) % carouselSources.length
                    video.src = carouselSources[nextIndex]
                    video.play()
                }, 500)
            }

            video.addEventListener('ended', handleVideoEnded)

            return () => {
                video.removeEventListener('ended', handleVideoEnded)
            }
        }
    }, [carouselSources, isVideo])

    return (
            <div
                className={`${formVisibility ? 'max-md:!hidden' : ''}`}
                style={{height: height}}
            >
                {filter && <CarouselFilter/>}
                {isVideo ? (
                    <>
                        <div className={'absolute bg-black h-full w-full overflow-hidden mr-auto flex'}>
                            <video
                                ref={videoRef}
                                playsInline={true}
                                autoPlay={true}
                                muted={true}
                                src={carouselSources[0]}
                                className={`object-cover w-full h-full transition-all duration-500 ${videoTransitionActive ? '!opacity-0' : 'opacity-100'}`}
                            >
                            </video>
                        </div>
                    </>
                ) : (
                    <Swiper
                        className={`pointer-events-none`}
                        {...swiperConfig}
                    >
                    {carouselSources?.map((url, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className={`bg-cover bg-center`}
                                style={{backgroundImage: `url(${url})`, height: height}}
                            />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                )}
            </div>

    )
}

export default Carousel