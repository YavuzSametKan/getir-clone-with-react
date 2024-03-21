import React from 'react';

function HeroContainer({ children }) {
    return (
        <div
            className={'container h-[500px] max-md:h-fit max-md:top-0 max-md:left-0 max-md:translate-x-0 absolute max-md:relative flex max-md:flex-col justify-between place-items-center z-10 top-11 left-1/2 -translate-x-1/2'}
        >
            {children}
        </div>
    );
}

export default HeroContainer;