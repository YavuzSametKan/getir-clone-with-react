import React from 'react';

function SelectedPageViewer({ selectedPageLogo, center, mobile }) {
    return (
        <div className={`bg-brandHover py-4 max-md:flex
                         ${center && 'justify-center'}
                         ${mobile ? 'hidden' : 'flex'}`}
        >
            <img
                src={selectedPageLogo}
                alt="selected page logo"/>
        </div>
    );
}

export default SelectedPageViewer;