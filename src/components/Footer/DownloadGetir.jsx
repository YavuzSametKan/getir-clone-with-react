import React from 'react';
import appStore from "../images/app-store.svg";
import playStore from "../images/google-play-store.svg";
import appGallery from "../images/app-gallery.svg";

function DownloadGetir() {
    return (
        <div className={'flex-1 grid gap-3.5'}>
            <h3
                className={'text-brandHover text-lg'}
            >
                Getir'i indir!
            </h3>
            <a href=""><img src={appStore} alt="app store"/></a>
            <a href=""><img src={playStore} alt="play store"/></a>
            <a href=""><img src={appGallery} alt="app gallery"/></a>
        </div>
    );
}

export default DownloadGetir;