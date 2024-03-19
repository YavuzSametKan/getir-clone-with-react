import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import SwiperConfig, { CarouselImages } from "./Carousel.config";

function Carousel() {
    return (
        <main>

            <Swiper
                className={'pointer-events-none relative'}
                {...SwiperConfig}
            >
                <div className={'h-[500px] bg-gradient-to-l from-brand absolute top-0 left-0 z-30'}></div>
                {CarouselImages.map((url, i) => (
                    <SwiperSlide>
                        <div
                            className={'bg-cover bg-center h-[500px]'}
                            style={{backgroundImage: `linear-gradient(to left, transparent, #4c3398), url(${url})`}}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
}

export default Carousel;