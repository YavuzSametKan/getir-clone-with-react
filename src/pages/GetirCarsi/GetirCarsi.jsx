import React from 'react';
import CarouselSources from "./Carousel.config";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import HeaderSpacingContainer from "../../components/Header/HeaderSpacingContainer";
import CategoriesConfig from "./Categories.config";
import Categories from "../../components/Categories/Categories";
import Avantages from "../../components/Avantages/Avantages";
import avantagesConfig from "./Avantage.config";
import Footer from "../../components/Footer/Footer";
import phones from "../../components/MobileAppBanner/images/phones.png";
import MobileAppBanner from "../../components/MobileAppBanner/MobileAppBanner";
import AreYouOwner from "../../components/AreYouOwner/AreYouOwner";

function GetirCarsi() {
    return (
        <>
            <Header/>
            <HeaderSpacingContainer>
                <Hero
                    carouselSources={CarouselSources}
                    filter={false}
                    locationSelectorTitle={false}
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
                <AreYouOwner
                    areYouOwnerConfig={{
                        title: 'İşletme sabibi misiniz?',
                        description: 'GetirÇarşı işletme iş ortaklarından biri ol, işini daha az maliyetle büyüt, müşteri memnuniyetini artır.\n'
                    }}
                />
                <Footer/>
            </HeaderSpacingContainer>
        </>
    );
}

export default GetirCarsi;