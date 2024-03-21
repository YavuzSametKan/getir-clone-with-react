import React from 'react';
import {FaLocationDot} from "react-icons/fa6";
import {MdKeyboardArrowRight} from "react-icons/md";

function ChoiceLocation() {
    return (
        <div className={'hidden max-md:flex items-center justify-between w-full p-2 bg-white'}>
            <div className={'flex items-center gap-1'}>
                <FaLocationDot className={'text-brandHover'}/>
                <span className={'text-sm'}>Teslimat Adresi Belirle</span>
            </div>
            <MdKeyboardArrowRight className={'text-brandHover text-2xl'}/>
        </div>
    );
}

export default ChoiceLocation;