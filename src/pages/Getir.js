import React from 'react';
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import MobileAppBanner from "../components/MobileAppBanner/MobileAppBanner";
import HeaderSpacingContainer from "../components/Header/HeaderSpacingContainer";

function Getir() {
    return (
        <>
            <Header/>
            <HeaderSpacingContainer>
                <Hero/>
                <Categories/>
                <MobileAppBanner/>
            </HeaderSpacingContainer>
        </>
    );
}

export default Getir;