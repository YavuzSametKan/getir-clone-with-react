import { Autoplay } from "swiper/modules";

export const CarouselImages = [
    './images/carousel-1.png',
    './images/carousel-2.png',
    './images/carousel-3.png',
    './images/carousel-4.png',
]

const SwiperConfig = {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    modules: [Autoplay],
}

export default SwiperConfig