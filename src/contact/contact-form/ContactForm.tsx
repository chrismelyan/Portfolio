import React from 'react';
import s from './ContactForm.module.scss';

const ContactForm = () => {
    return (
        <div className={s.contactContainer}>
            <form className={s.formContainer}>
                <input className={s.textField} placeholder={'Your name'}/>
                <input className={s.textField} placeholder={'Your email'}/>
                <textarea className={s.textarea} placeholder={'Your message'}/>
            </form>
            <button className={s.sendButton}>Send</button>
        </div>
    );
};

export default ContactForm;