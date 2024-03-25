import React from 'react';
import {IoSearchOutline} from "react-icons/io5";
import FindLocationBox from "./FindLocationBox";

function LocationSelectorForm() {
    return (
        <form className={'w-full'}>
            <label
                className={'relative flex items-center justify-between bg-white w-full rounded-sm ring-2 ring-gray-200 py-3 pr-3 pl-5 gap-2 max-md:py-2 max-md:pl-3 cursor-text'}
            >
                <div className={'inline-flex gap-2 items-center flex-1'}>
                    <IoSearchOutline className={'text-brand text-lg'}/>
                    <input
                        type="text"
                        className={'text-sm placeholder-gray-400 outline-none w-full'}
                        placeholder='Sokağını veya posta kodunu arat'
                    />
                </div>
                <FindLocationBox/>
            </label>
        </form>
    )
}

export default LocationSelectorForm;