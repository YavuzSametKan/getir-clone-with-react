import React from 'react';

function Seperator({title}) {
    return (
        <div className={'flex justify-between items-center gap-2 bg-white'}>
            <span className={'border-t border-gray-200 h-0 flex-1'}></span>
            <span className={'text-sm text-gray-700 '}>{title}</span>
            <span className={'border-t border-gray-200 h-0 flex-1'}></span>
        </div>
    );
}

export default Seperator;