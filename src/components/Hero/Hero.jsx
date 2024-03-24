import React, {useState} from "react"
import Carousel from "./Carousel/Carousel"
import HeroContainer from "./HeroContainer"
import Brand from "./Brand/Brand"
import RegisterForm from "../RegisterForm/RegisterForm"
import { Autoplay } from "swiper/modules";
import LocationSelector from "../LocationSelector/LocationSelector";
import Seperator from "../RegisterForm/Seperator";
import ChoiceLocation from "../ChoiceLocation/ChoiceLocation";

function Hero({
                  height,
                  isVideo,
                  carouselSources,
                  swiperConfig,
                  brandConfig,
                  formVisibility,
                  locationSelector,
                  filter
}) {
    const [selected, setSelected] = useState("TR")
    return (
        <main className={'max-md:bg-white relative'}>
            {
                formVisibility &&
                <ChoiceLocation/>
            }
            <Carousel
                height={height}
                formVisibility={formVisibility}
                carouselSources={carouselSources}
                swiperConfig={swiperConfig}
                isVideo={isVideo}
                filter={filter}
            />
            <HeroContainer
                height={height}
                formVisibility={formVisibility}
                locationSelector={locationSelector}
            >
                <Brand
                    formVisibility={formVisibility}
                    brandConfig={brandConfig}
                />
                <div
                    className={`max-md:w-full`}
                >
                    {
                        (locationSelector && formVisibility) &&
                        <>
                            <LocationSelector/>
                            <Seperator title='veya'/>
                        </>
                    }

                    {
                        formVisibility &&
                        <RegisterForm
                            selected={selected}
                            setSelected={setSelected}
                            locationSelector={locationSelector}
                        />
                    }
                </div>
            </HeroContainer>
        </main>
)
}

Hero.defaultProps = {
    height: '500px',
    formVisibility: true,
    swiperConfig: {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        modules: [Autoplay]
    },
    locationSelector: true,
    isVideo: false,
    filter: true
}

export default Hero