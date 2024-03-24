import React from 'react';
import {IoSearchOutline} from "react-icons/io5";
import FindLocationBox from "./FindLocationBox";
import LocationSelectorForm from "./LocationSelectorForm";

function LocationSelector() {
    return (
        <>
            <div
                className={'bg-white sm:min-w-[400px] max-md:w-full flex flex-col place-items-stretch p-5 gap-4 rounded-t-lg'}
            >
                <div className={'flex flex-col gap-4'}>
                    <span
                        className={'font-semibold text-brand text-center'}
                    >
                        Adresine getiren restoranları gör
                    </span>
                    <label
                        className={'relative flex items-center justify-between bg-white w-full rounded-sm ring-2 ring-gray-200 py-3 pr-3 pl-5 gap-2 max-md:py-2 max-md:pl-3 cursor-text'}
                    >
                        <div className={'inline-flex gap-2 items-center flex-1'}>
                            <IoSearchOutline className={'text-brand text-lg'}/>
                            <LocationSelectorForm />
                        </div>
                        <FindLocationBox />
                    </label>
                </div>
            </div>
        </>
    );
}

export default LocationSelector;