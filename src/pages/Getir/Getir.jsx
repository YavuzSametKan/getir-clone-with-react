import React from 'react';
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import MobileAppBanner from "../../components/MobileAppBanner/MobileAppBanner";
import HeaderSpacingContainer from "../../components/Header/HeaderSpacingContainer";
import Avantages from "../../components/Avantages/Avantages";
import Footer from "../../components/Footer/Footer";
import BrandConfig from "./Brand.config";
import { CarouselSources } from "./Carousel.config";
import avantagesConfig from "./Avantage.config";

function Getir() {
    return (
        <>
            <Header/>
            <HeaderSpacingContainer>
                <Hero brandConfig={BrandConfig} carouselSources={CarouselSources} height={'500px'} locationSelector={false}/>
                <Categories/>
                <MobileAppBanner/>
                <Avantages avantagesConfig={avantagesConfig}/>
                <Footer/>
            </HeaderSpacingContainer>
        </>
    );
}

export default Getir;