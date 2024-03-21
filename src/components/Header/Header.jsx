import React from 'react'
import serviceListItems from "./Header.config"
import {TbWorld} from "react-icons/tb"
import {FaUser} from "react-icons/fa"
import {FaUserPlus} from "react-icons/fa6"
import SelectedPageViewer from "./SelectedPageViewer";

function Header() {
    return (
        <header className={'bg-brand h-fit z-20 w-full md:fixed md:top-0'}>
            <nav className={'container flex justify-between h-11 max-md:h-10'}>

                <ul className={'service-list inline-flex items-end gap-x-1'}>
                    {serviceListItems.map((listItem, i) => (
                        <li
                            key={i}
                            className={
                                `h-10 px-5 rounded-t-md flex items-center cursor-pointer hover:bg-brandHover max-md:h-9 max-md:px-3
                                ${listItem?.selected === true && 'selected'}`
                            }
                        >
                            <img
                                className={'max-h-4 max-md:max-h-[14px]'}
                                {...listItem.img}
                            />
                        </li>
                    ))}
                </ul>

                <ul className={'setting-list flex gap-x-9 max-md:hidden'}>
                    <li className={'inline-flex items-center gap-x-2 text-sm text-brandText cursor-pointer'}>
                        <TbWorld size={20}/>
                        <span className={'max-lg:hidden'}>Türkçe (TR)</span>
                    </li>
                    <li className={'inline-flex items-center gap-x-2 text-sm text-brandText font-semibold cursor-pointer'}>
                        <FaUser size={16}/>
                        <span className={'max-lg:hidden'}>Giriş yap</span>
                    </li>
                    <li className={'inline-flex items-center gap-x-2 text-sm text-brandText font-semibold cursor-pointer'}>
                        <FaUserPlus size={18}/>
                        <span className={'max-lg:hidden'}>Kayıt Ol</span>
                    </li>
                </ul>
            </nav>

            <SelectedPageViewer
                center={true}
                mobile={true}
                    selectedPageLogo={serviceListItems[0].img.src}
            />
        </header>
    );
}

export default Header;