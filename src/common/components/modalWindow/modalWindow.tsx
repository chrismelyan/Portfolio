import React from 'react';
import Button from "../button/Button";
import d from '../../../contact/contact-form/ContactForm.module.scss';
import s from './modalWindow.module.scss';

type ModalWindowType = {
    message: string
    setSend: (isSent: boolean) => void
    setError: (error: boolean) => void
    error?: boolean
}

const ModalWindow = ({message, setSend, setError, error}: ModalWindowType) => {
    const onBack = () => {
        if (error) {
            setError(false);
        }
        setSend(false);
    }
    return (
        <div className={s.darkBg}>
            <div className={s.centered}>
                <div className={s.modal}>
                    <div className={s.modalContainer}>
                        <p className={s.message}>{message}</p>
                        <Button style={d.button} title={'Back'} callback={onBack}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;