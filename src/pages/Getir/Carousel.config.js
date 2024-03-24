import { Autoplay } from "swiper/modules";

export const CarouselSources = [
    './images/GetirCarousel/carousel-1.png',
    './images/GetirCarousel/carousel-2.png',
    './images/GetirCarousel/carousel-3.png',
    './images/GetirCarousel/carousel-4.png',
]

const SwiperConfig = {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    modules: [Autoplay],
}

export default SwiperConfig