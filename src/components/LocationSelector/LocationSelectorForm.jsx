import React from 'react';

function LocationSelectorForm() {
    return (
        <form className={'w-full'}>
            <input
                type="text"
                className={'text-sm placeholder-gray-400 outline-none w-full'}
                placeholder='Sokağını veya posta kodunu arat'
            />
        </form>
    );
}

export default LocationSelectorForm;