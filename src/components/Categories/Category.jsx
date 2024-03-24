import React from 'react';

function Category({ categoryImg, category }) {
    return (
        <div
            className={'w-auto inline-flex flex-col gap-2.5 items-center py-4 hover:bg-gray-100 rounded cursor-pointer transition'}
        >
            <img
                className={'w-12 ring-1 ring-gray-200 rounded'}
                src={categoryImg}
                alt={category}/>
            <span className={'text-gray-500 font-semibold text-center text-sm'}>{category}</span>
        </div>
    );
}

export default Category;