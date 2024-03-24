import React from 'react';
import Category from './Category'

function Categories({categoriesConfig}) {
    return (
        <section className={'shadow-lg shadow-gray-200 bg-white'}>
            <div className={'container py-6 bg-white'}>
                <span className={'font-semibold text-gray-600 text-sm max-md:ml-5'}>Kategoriler</span>

                <div className={'grid grid-cols-10 max-lg:grid-cols-5 max-md:grid-cols-4 grid-flow-row gap-4'}>
                    {
                        categoriesConfig.map((category, i) => <Category key={i} {...category}/>)
                    }
                </div>
            </div>
        </section>
    );
}

export default Categories;