import React from 'react';

function PhoneInput() {
    return (
        <div className={'relative flex-1'}>
            <input
                id="phone"
                type="number"
                className={'w-full outline-none h-14 ring-2 ring-gray-200 rounded px-4 focus:ring-brand hover:ring-brand transition'}
                required={true}
            />
            <label
                htmlFor="phone"
                className={'absolute top-1/2 left-4 -translate-y-2/3 text-gray-400 text-[15px] transition-all select-none cursor-text'}
            >
                Telefon Numarası
            </label>
        </div>
    );
}

export default PhoneInput;