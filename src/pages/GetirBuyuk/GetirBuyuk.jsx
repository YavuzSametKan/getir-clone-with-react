import React from 'react';
import Header from "../../components/Header/Header";
import HeaderSpacingContainer from "../../components/Header/HeaderSpacingContainer";
import Hero from "../../components/Hero/Hero";
import CarouselSources from "./Carousel.config";
import Categories from "../../components/Categories/Categories";
import MobileAppBanner from "../../components/MobileAppBanner/MobileAppBanner";
import Avantages from "../../components/Avantages/Avantages";
import avantagesConfig from "./Avantage.config";
import Footer from "../../components/Footer/Footer";
import phones from './images/mobile-app-banner/phones.png'
import CategoriesConfig from "./Categories.config";
import getirBuyukLogo from '../../components/Header/images/logos/getirbuyuk.svg'

function GetirBuyuk() {
    return (
        <>
            <Header/>
            <HeaderSpacingContainer>
                <Hero
                    brandConfig={{
                        img: getirBuyukLogo,
                        size: 325,
                        title: 'Binlerce ürün ve kaçmaz fiyatlar kapında!'
                    }}
                    carouselSources={CarouselSources}
                    locationSelector={false}
                />
                <Categories categoriesConfig={CategoriesConfig}/>
                <MobileAppBanner
                    mobileAppBannerConfig={{
                        title: "Getir'i İndir!",
                        description: 'Market ihtiyaçlarını kapına kadar getirelim.',
                        img: phones
                    }}
                />
                <Avantages avantagesConfig={avantagesConfig}/>
                <Footer/>
            </HeaderSpacingContainer>
        </>
    );
}

export default GetirBuyuk;