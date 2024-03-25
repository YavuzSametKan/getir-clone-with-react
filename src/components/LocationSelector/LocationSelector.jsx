import React from 'react';
import LocationSelectorForm from "./LocationSelectorForm";

function LocationSelector({ locationSelectorTitle }) {
    return (
        <>
            <div
                className={'bg-white sm:min-w-[400px] max-md:w-full flex flex-col place-items-stretch p-5 gap-4 rounded-t-lg'}
            >
                <div className={'flex flex-col gap-4'}>
                    {
                        locationSelectorTitle &&
                        <span
                            className={'font-semibold text-brand text-center'}
                        >
                            {locationSelectorTitle}
                        </span>
                    }
                    <LocationSelectorForm/>
                </div>
            </div>
        </>
    );
}

LocationSelector.defaultProps = {
    locationSelectorTitle: 'Adresine getiren restoranları gör'
}

export default LocationSelector;