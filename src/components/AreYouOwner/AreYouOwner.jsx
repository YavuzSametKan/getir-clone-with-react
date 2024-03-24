import React from 'react';

function AreYouOwner({areYouOwnerConfig}) {
    return (
        <section className={'container mb-16 max-md:px-5'}>
            <div
                className={'h-24 bg-white flex max-md:flex-col justify-between max-md:justify-center items-center max-md:items-start px-20 py-28 max-md:py-24 max-md:px-6 max-md:gap-4'}
                style={{backgroundImage: 'url("https://cdn.getir.com/getirweb-images/common/partners-background.jpg")'}}
            >
                <div className={'flex flex-col gap-3'}>
                    <h2 className={'text-3xl max-md:text-xl text-brand font-semibold'}>{areYouOwnerConfig?.title}</h2>
                    <p className={'text-gray-600 max-md:text-sm'}>{areYouOwnerConfig?.description}</p>
                </div>
                <a
                    href=""
                    className={'bg-brandSecond text-brand rounded px-7 py-3'}
                >
                    Hemen Başvur
                </a>
            </div>
        </section>
    );
}

export default AreYouOwner;