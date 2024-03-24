import React from 'react'

function Brand({formVisibility, brandConfig}) {
    return (
        <>
            <div className={`flex flex-col justify-center gap-10 ${formVisibility ? 'max-md:hidden' : null}`}>
                { brandConfig?.img &&
                    <img
                        width={180}
                        src={brandConfig?.img}
                        alt="hero image"
                    />
                }
                <span
                    className={'text-white text-4xl shadow-inner'}
                >
                    {brandConfig?.title}
                </span>
            </div>
        </>
    )
}

export default Brand;