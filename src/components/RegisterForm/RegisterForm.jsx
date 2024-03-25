import React from 'react';
import ReactFlagsSelect from "react-flags-select";
import CountryToPhones from "./CountryToPhones";
import SubmitButton from "./SubmitButton";
import PhoneInput from "./PhoneInput";
import {useFormik} from "formik";
import validationSchema from './validation'

function RegisterForm({selected, setSelected, locationSelector}) {
    const formik = useFormik({
        initialValues: {
            phoneNumber: ''
        },
        onSubmit: (values, bag) => {
            bag.resetForm()
            console.log(values)
        },
        validationSchema
    })
    return (
            <div
                className={`bg-white sm:min-w-[400px] flex flex-col place-items-stretch p-5 gap-4 ${locationSelector ? 'rounded-b-lg' : 'rounded-lg'}`}
            >
                <span className={'font-semibold text-brand text-center'}>Giriş yap veya kayıt ol</span>
                <form
                    onSubmit={formik.handleSubmit}
                    className={'flex flex-col gap-2'}
                >
                    <div className={'flex gap-3 w-full'}>
                        <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            selectedSize={15}
                            optionsSize={15}
                            customLabels={CountryToPhones}
                            className={'flag-select'}
                        />
                        <PhoneInput formik={formik}/>
                    </div>
                    <SubmitButton formik={formik}/>
                </form>
            </div>
    )
}

export default RegisterForm;