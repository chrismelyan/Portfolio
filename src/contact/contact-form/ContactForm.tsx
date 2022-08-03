import React from 'react';
import s from './ContactForm.module.scss';
import Button from "../../common/components/button/Button";

const ContactForm = () => {
    return (
        <div className={s.contactContainer}>
            <form className={s.formContainer}>
                <input className={s.textField} placeholder={'Your name'}/>
                <input className={s.textField} placeholder={'Your email'}/>
                <textarea className={s.textarea} placeholder={'Your message'}/>
            </form>
            <div className={s.buttonContainer}>
                <Button title={'send'} callback={() => {}}/>
            </div>
        </div>
    );
};

export default ContactForm;