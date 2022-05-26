import React from 'react';
import s from './Contact.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import ContactForm from "./contact-form/ContactForm";

const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${s.contactWrapper} ${stylesContainer.container}`}>
                <Title title={'contact me'}/>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;