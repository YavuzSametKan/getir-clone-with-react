import React from 'react';

function HeroContainer({ children }) {
    return (
        <div
            className={'container h-[500px] max-md:h-auto absolute flex justify-between place-items-center z-10 top-11 max-md:top-24 left-1/2 -translate-x-1/2'}
        >
            {children}
        </div>
    );
}

export default HeroContainer;