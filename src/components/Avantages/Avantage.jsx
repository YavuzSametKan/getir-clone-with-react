import React from 'react';

function Avantage({src, title, description}) {
    return (
        <div
            className={'flex flex-col flex-1 justify-center items-center py-14 max-md:py-8 max-md:px-4 gap-6 bg-white rounded shadow-lg shadow-brand/5'}>
            <img
                className={''}
                src={src}
                alt={title}
            />
            <div>
                <h2
                    className={'text-brand text-xl text-center'}
                >
                    {title}
                </h2>

                <p
                    className={'text-gray-400 text-center mt-1.5'}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Avantage;