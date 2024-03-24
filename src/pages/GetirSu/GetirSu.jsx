import React from 'react';
import Header from "../../components/Header/Header";
import HeaderSpacingContainer from "../../components/Header/HeaderSpacingContainer";
import Hero from "../../components/Hero/Hero";
import CarouselSources from "./Carousel.config";
import MobileAppBanner from "../../components/MobileAppBanner/MobileAppBanner";
import Footer from "../../components/Footer/Footer";
import phones from './images/mobile-app-banner/phone.png'
import getirSuLogo from '../../components/Header/images/logos/getirsu.svg'

function GetirSu() {
    return (
        <>
            <Header/>
            <HeaderSpacingContainer>
                <Hero
                    brandConfig={{
                        titleSize: '26px',
                        maxWidth: '700px',
                        title: `Hizmetimizi artık sadece uygulamamız üzerinden veriyoruz.
                                Şimdi Getir uygulamasını indir, siparişini ver,
                                dilediğin su markası bayiden kapına gelsin.`
                    }}
                    formVisibility={false}
                    carouselSources={CarouselSources}
                />
                <MobileAppBanner
                    mobileAppBannerConfig={{
                        title: "Getir'i İndir!",
                        description: 'Damacana suyunuzu GetirSu ile dakikalar içinde kapınıza getirelim.',
                        img: phones,
                        height: '225px'
                    }}
                />
                <Footer/>
            </HeaderSpacingContainer>
        </>
    );
}

export default GetirSu;