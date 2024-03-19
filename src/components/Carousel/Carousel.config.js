import { Autoplay } from "swiper/modules";

export const CarouselImages = [
    'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg',
    'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg',
    'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg',
    'https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg',
]

const SwiperConfig = {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    modules: [Autoplay],
}

export default SwiperConfig