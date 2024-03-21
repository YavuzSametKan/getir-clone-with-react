import React from 'react';

function FooterContainer({ children, className }) {
    return (
        <div className={'md:container max-md:px-5 ' + className}>
            {children}
        </div>
    );
}

export default FooterContainer;