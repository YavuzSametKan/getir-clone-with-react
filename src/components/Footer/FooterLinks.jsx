import React from 'react';
import {IoIosArrowDown} from "react-icons/io";

function FooterLinks({ footerLinks, selected, onClick }) {
    const { title, links } = footerLinks

    return (
        <div
            className={`footer-links flex flex-col flex-1 gap-3.5 max-md:gap-0 relative`}
            onClick={onClick}
        >
            <h3
                className={'text-brandHover text-lg max-md:cursor-pointer'}
            >
                {title}
            </h3>
            <div
                className={`links flex flex-col gap-3.5 overflow-hidden max-md:opacity-0 max-md:max-h-0 transition-all duration-300
                            ${selected ? 'max-md:max-h-[10000px] max-md:!opacity-100 transition-all duration-300' : null}`}
            >
                {links.map((link, i) => (
                    <a
                        className={'text-sm text-gray-800'}
                        href={link.url}
                        key={i}
                    >
                        {link.title}
                    </a>
                ))}
            </div>
            <button
                className={`hidden max-md:inline-flex w-fit p-1 text-brandHover absolute right-0 rounded bg-indigo-50 transition duration-300
                            ${selected ? 'max-md:rotate-180' : null}`}
            >
                <IoIosArrowDown/>
            </button>
        </div>
    );
}

export default FooterLinks;