import React from 'react'
import Avantage from "./Avantage"

function Avantages({ avantagesConfig }) {
    return (
        <section className={'container flex max-md:flex-col my-14 max-md:my-5 max-md:px-5 gap-5'}>
            {
                avantagesConfig.map((avantageProps, i) => (
                    <Avantage
                        key={i}
                        {...avantageProps}
                    />
                ))
            }

        </section>
    );
}

export default Avantages;