import React from 'react'
import serviceListItems from "./Header.config"
import { TbWorld } from "react-icons/tb"
import { FaUser } from "react-icons/fa"
import { FaUserPlus } from "react-icons/fa6"

function Header() {
    return (
        <header className={'bg-brand h-11'}>
            <div className={'container flex justify-between h-full'}>
                <ul className={'service-list inline-flex items-end gap-x-1'}>
                    {serviceListItems.map((listItem, i) => (
                        <li
                            key={i}
                            className={
                                `h-10 px-5 rounded-t-md flex items-center cursor-pointer hover:bg-brandHover 
                                ${listItem?.selected === true && 'selected'}`
                            }
                        >
                            <img
                                className={'max-h-4'}
                                {...listItem.img}
                            />
                        </li>
                    ))}
                </ul>

                <ul className={'setting-list flex gap-x-9'}>
                    <li className={'inline-flex items-center gap-x-2 text-sm text-brandText cursor-pointer'}>
                        <TbWorld size={20} />Türkçe (TR)
                    </li>
                    <li className={'inline-flex items-center gap-x-2 text-sm text-brandText font-semibold cursor-pointer'}>
                        <FaUser size={16} /> Giriş yap
                    </li>
                    <li className={'inline-flex items-center gap-x-2 text-sm text-brandText font-semibold cursor-pointer'}>
                        <FaUserPlus size={18} /> Kayıt Ol
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;