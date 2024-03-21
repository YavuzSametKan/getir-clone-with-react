import React from 'react';
import license from "./images/license.png";

function License() {
    return (
        <div className={'max-xl:hidden'}>
            <img
                className={'shadow-md p-4 w-24 rounded-lg'}
                src={license}
                alt="license"
            />
        </div>
    );
}

export default License;