import React from 'react';

function SubmitButton() {
    return (
        <button
            type={'submit'}
            className={'w-full bg-brandSecond py-3 text-sm text-brand rounded-lg hover:bg-brand hover:text-brandSecond transition'}
        >
            Telefon numarası ile devam et
        </button>
    );
}

export default SubmitButton;