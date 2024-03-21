import React from 'react';
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {GrLanguage} from "react-icons/gr";

function CopyrightAndBottomBar() {
    return (
        <div className={'border-t border-gray-100 max-md:border-t-none'}>
            <div className={'py-7 max-md:py-5 flex max-md:flex-col max-md:gap-3 items-center justify-between'}>
                <div className={'text-[.825rem] flex max-md:flex-col max-md:items-center max-md:gap-2'}>
                    <span className={'text-gray-700'}>© 2024 Getir</span>
                    <span className={'px-3 font-bold max-md:hidden'}>·</span>
                    <a
                        className={'text-brandHover'}
                        href=""
                    >Bilgi Toplumu Hizmetleri
                    </a>
                </div>

                <div className={'flex gap-4'}>
                    <a
                        className={'text-xl text-gray-500 p-1 hover:bg-indigo-50 hover:text-brandHover transition-all duration-300 rounded'}
                        href=""
                    >
                        <FaFacebook/>
                    </a>
                    <a
                        className={'text-xl text-gray-500 p-1 hover:bg-indigo-50 hover:text-brandHover transition-all duration-300 rounded'}
                        href=""
                    >
                        <FaXTwitter/>
                    </a>
                    <a
                        className={'text-xl text-gray-500 p-1 hover:bg-indigo-50 hover:text-brandHover transition-all duration-300 rounded'}
                        href=""
                    >
                        <FaInstagram/>
                    </a>

                    <a
                        className={'bg-white inline-flex gap-2 items-center text-gray-500 border px-2 rounded hover:bg-indigo-50 hover:text-brandHover transition duration-300'}
                        href="">
                        <GrLanguage/>
                        <span className={'text-sm max-md:inline max-lg:hidden max-2xl:inline'}>Türkçe (TR)</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CopyrightAndBottomBar;