import React from 'react';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import MobileAppBanner from "../components/MobileAppBanner/MobileAppBanner";
import HeaderSpacingContainer from "../components/Header/HeaderSpacingContainer";
import Avantages from "../components/Avantages/Avantages";
import Footer from "../components/Footer/Footer";
import ChoiceLocation from "../components/ChoiceLocation/ChoiceLocation";

function Getir() {
    return (
        <>
            <Header/>
            <HeaderSpacingContainer>
                <ChoiceLocation/>
                <Hero/>
                <Categories/>
                <MobileAppBanner/>
                <Avantages/>
                <Footer/>
            </HeaderSpacingContainer>
        </>
    );
}

export default Getir;