import React from 'react';
import ReactFlagsSelect from "react-flags-select";
import CountryToPhones from "./CountryToPhones";
import SubmitButton from "./SubmitButton";
import PhoneInput from "./PhoneInput";

function RegisterForm({selected, setSelected}) {
    return (
            <div
                className={'bg-white sm:min-w-[400px] flex flex-col place-items-stretch p-5 gap-4'}
            >
                <span className={'font-semibold text-brand text-center'}>Giriş yap veya kayıt ol</span>
                <form className={'flex flex-col gap-2'}>
                    <div className={'flex gap- w-full gap-3'}>
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            selectedSize={15}
                            optionsSize={15}
                            customLabels={CountryToPhones}
                            className={'flag-select'}
                        />
                        <PhoneInput/>
                    </div>
                    <SubmitButton/>
                </form>
            </div>
    )
}

export default RegisterForm;