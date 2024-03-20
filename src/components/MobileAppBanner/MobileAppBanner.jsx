import React, {useEffect, useState} from 'react'

function MobileAppBanner() {
    return (
        <section className={'md:container'}>
            <div
                className={'mobileAppBanner bg-brandHover md:rounded-xl md:h-[312px] my-5 max-md:my-0 flex items-center px-12 max-md:p-5 relative overflow-hidden'}
                style={{backgroundImage: `url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')`}}
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
                                src="https://www.getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                                alt="app store"/>
                        </a>
                        <a href="">
                            <img
                                src="https://www.getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                                alt="google play store"/>
                        </a>
                        <a href="">
                            <img
                                src="https://www.getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                                alt="app gallery"/>
                        </a>
                    </figure>
                </div>

                <img
                    className={'absolute -bottom-4 right-0 max-lg:-mr-[420px] max-md:hidden contains h-72'}
                    style={{overflowClipMargin: 'content-box'}}
                    src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
                    alt="apps"
                />
            </div>

        </section>
    );
}

export default MobileAppBanner