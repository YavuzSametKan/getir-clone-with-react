
import React from 'react';

function SubmitButton({ formik }) {
    return (
        <button
            type={'submit'}
            disabled={formik.isSubmitting}
            className={'w-full bg-brandSecond py-3 text-sm font-bold text-brand rounded-lg hover:bg-brand hover:text-brandSecond transition'}
        >
            Telefon numarası ile devam et
        </button>
    );
}

export default SubmitButton;