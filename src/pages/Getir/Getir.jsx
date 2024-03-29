import React from 'react';
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import MobileAppBanner from "../../components/MobileAppBanner/MobileAppBanner";
import HeaderSpacingContainer from "../../components/Header/HeaderSpacingContainer";
import Avantages from "../../components/Avantages/Avantages";
import Footer from "../../components/Footer/Footer";
import { CarouselSources } from "./Carousel.config";
import avantagesConfig from "./Avantage.config";
import phones from '../../components/MobileAppBanner/images/phones.png'
import CategoriesConfig from "./Categories.config";

function Getir() {
    return (
        <>
            <Header/>
            <HeaderSpacingContainer>
                <Hero
                    brandConfig={{
                        img: 'https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg',
                        title: 'Dakikalar içinde kapında'
                    }}
                    carouselSources={CarouselSources}
                    locationSelector={false}
                />
                <Categories categoriesConfig={CategoriesConfig}/>
                <MobileAppBanner
                    mobileAppBannerConfig={{
                        title: "Getir'i İndir!",
                        description: 'İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.',
                        img: phones
                    }}
                />
                <Avantages avantagesConfig={avantagesConfig}/>
                <Footer/>
            </HeaderSpacingContainer>
        </>
    );
}

export default Getir;