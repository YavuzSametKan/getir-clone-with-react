import React from 'react';
import { MdErrorOutline } from "react-icons/md";

function PhoneInput({formik}) {
    return (
        <div className={'flex-1'}>
        <div className={'relative'}>
            <input
                name="phoneNumber"
                id="phoneNumber"
                type="tel"
                className={`w-full outline-none h-14 ring-2 ring-gray-200 rounded px-4 focus:ring-brand hover:ring-brand transition
                            ${formik.errors.phoneNumber && formik.touched.phoneNumber ? 'ring-red-500 hover:ring-red-500 focus:ring-red-500' : ''}`}
                placeholder=''
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                disabled={formik.isSubmitting}
                maxLength={10}
            />
            <label
                htmlFor="phoneNumber"
                className={'absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-[15px] transition-all select-none cursor-text'}
            >
                Telefon Numarası
            </label>
            {
                formik.errors.phoneNumber && formik.touched.phoneNumber &&
                <MdErrorOutline className={'absolute right-3 top-1/2 -translate-y-1/2 text-3xl text-red-500'}/>
            }
        </div>
            {
                formik.errors.phoneNumber && formik.touched.phoneNumber &&
                <div className='text-red-700 text-xs max-w-64 my-2'>
                    {formik.errors.phoneNumber}
                </div>
            }
        </div>
    );
}

export default PhoneInput;