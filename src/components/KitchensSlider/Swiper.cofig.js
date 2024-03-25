import {Navigation} from "swiper/modules";

const SwiperConfig = {
    modules:[Navigation],
    spaceBetween:15,
    slidesPerGroup:3,
    speed:500,
    loop: true,
    navigation: true,
    className:'h-28',
    breakpoints:{
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
    }
}

export default SwiperConfig