import React from 'react';
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HeaderSpacingContainer from "../../components/Header/HeaderSpacingContainer";
import CarouselSources from "./Carousel.config";
import Avantages from "../../components/Avantages/Avantages";
import Footer from "../../components/Footer/Footer";
import avantagesConfig from "./Avantage.config";
import AreYouOwner from "../../components/AreYouOwner/AreYouOwner";
import KitchensSlider from "../../components/KitchensSlider/KitchensSlider";

function GetirYemek() {
    return (
        <>
            <Header/>
            <HeaderSpacingContainer>
                <Hero
                    height='600px'
                    isVideo={true}
                    carouselSources={CarouselSources}
                    filter={false}
                />
                <KitchensSlider/>
                <Avantages avantagesConfig={avantagesConfig}/>
                <AreYouOwner
                    areYouOwnerConfig={{
                        title: 'Restoran sabibi misiniz?',
                        description: 'GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.'
                    }}
                />
                <Footer/>
            </HeaderSpacingContainer>
        </>
    )
}

export default GetirYemek;