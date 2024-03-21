import React from 'react'
import doodle from './images/doodle.png'
import appGallery from './images/app-gallery.svg'
import appStore from './images/app-store.svg'
import playStore from './images/google-play-store.svg'
import phones from './images/phones.png'

function MobileAppBanner() {
    return (
        <section className={'md:container'}>
            <div
                className={'mobileAppBanner bg-brandHover md:rounded-xl md:h-[312px] my-5 max-md:my-0 flex items-center px-12 max-md:p-5 relative overflow-hidden'}
                style={{backgroundImage: `url(${doodle})`}}
            >
                <div className={'flex flex-col gap-3'}>
                    <h2
                        className={'text-white text-3xl max-md:text-2xl font-semibold'}
                    >
                        Getir'i İndir!
                    </h2>

                    <p
                        className={'text-white text-lg'}
                    >
                        İstediğiniz ürünleri dakikalar içinde kapınıza<br/> getirelim.
                    </p>

                    <figure className={'w-fit flex max-md:flex-col gap-2 mt-4'}>
                        <a href="">
                            <img
                                src={appStore}
                                alt="app store"/>
                        </a>
                        <a href="">
                            <img
                                src={playStore}
                                alt="google play store"/>
                        </a>
                        <a href="">
                            <img
                                src={appGallery}
                                alt="app gallery"/>
                        </a>
                    </figure>
                </div>

                <img
                    className={'absolute -bottom-4 right-0 max-lg:-mr-[420px] max-md:hidden contains h-72'}
                    style={{overflowClipMargin: 'content-box'}}
                    src={phones}
                    alt="apps"
                />
            </div>
        </section>
    );
}

export default MobileAppBanner