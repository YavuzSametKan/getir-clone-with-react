import React from 'react'

function Brand({formVisibility, brandConfig}) {
    return (
        <>
            <div className={`flex flex-col justify-center gap-10 ${formVisibility ? 'max-md:hidden' : 'max-md:px-5 max-md:mt-36'}`}>
                { brandConfig?.img &&
                    <img
                        width={brandConfig.size ?? 180}
                        src={brandConfig?.img}
                        alt="hero image"
                    />
                }
                <span
                    className={'text-white text-4xl shadow-inner'}
                    style={{
                        fontSize: brandConfig?.titleSize,
                        maxWidth: brandConfig?.maxWidth ?? '500px'
                    }}
                >
                    {brandConfig?.title}
                </span>
            </div>
        </>
    )
}

export default Brand;