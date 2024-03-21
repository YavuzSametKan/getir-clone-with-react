import React from 'react';
import Avantage from "./Avantage";
import avantage1 from './images/avantage-1.svg'
import avantage2 from './images/avantage-2.svg'
import avantage3 from './images/avantage-3.svg'

function Avantages() {
    return (
        <section className={'container flex max-md:flex-col my-14 max-md:my-5 max-md:px-5 gap-5'}>
            <Avantage
                src={avantage1}
                title={'Her siparişine bir kampanya'}
                description={'Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin.'}
            />
            <Avantage
                src={avantage2}
                title={'Dakikalar içinde kapında'}
                description={'Getir’le siparişin dakikalar içinde kapına gelir.'}
            />
            <Avantage
                src={avantage3}
                title={'Binlerce çeşit mutluluk'}
                description={'GGetir’le siparişin dakikalar içinde kapına gelir.'}
            />
        </section>
    );
}

export default Avantages;