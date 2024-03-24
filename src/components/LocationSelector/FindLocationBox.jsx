import React from 'react';
import {TfiTarget} from "react-icons/tfi";

function FindLocationBox() {
    return (
        <div
            className={'location-select bg-gray-400 rounded-lg py-2 px-3 text-sm inline-flex items-center gap-2 font-bold text-white hover:cursor-not-allowed relative'}>
            <TfiTarget className={'text-lg'}/>
            <span className={'max-md:hidden'}>Konumunu Bul</span>
            <div
                className={'message absolute max-w-36 bg-gray-700 text-white text-xs font-normal z-50 p-4 -bottom-36 left-1/2 max-md:-left-2 -translate-x-1/2 hidden'}>
                <span
                    className={'w-3 h-3 bg-gray-700 inline-block rotate-45 absolute top-0 left-1/2 max-md:left-[78px] -translate-x-1/2 -translate-y-1/2'}
                >
                </span>
                Lütfen tarayıcı ayarlarından konum servisine izin verin
            </div>
        </div>
    );
}

export default FindLocationBox;