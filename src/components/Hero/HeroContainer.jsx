import React from 'react';

function HeroContainer({ children, height, formVisibility, locationSelector}) {
    return (
        <div
            className={`
                        container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between place-items-center z-10
                        ${
                            formVisibility
                                ? 'max-md:relative max-md:translate-x-0 max-md:top-24 max-md:left-0 max-md:!h-fit' 
                                : ''
                        }
                        ${
                            locationSelector
                                ? 'max-md:top-44'
                                : null
                        }
                      `}
            style={{height: height}}
        >
            {children}
        </div>
    );
}

export default HeroContainer;