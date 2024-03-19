import React from 'react';
import LoginForm from "../LoginForm/LoginForm";

function Brand({ selected, setSelected }) {
    return (
        <>
            <div className={'flex flex-col justify-center gap-10 max-md:hidden'}>
                <img
                    width={180}
                    src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
                    alt="getir logo"
                />
                <span
                    className={'text-white text-4xl shadow-inner'}
                >
                    Dakikalar içinde kapında
                </span>
            </div>
        </>
    )
}

export default Brand;