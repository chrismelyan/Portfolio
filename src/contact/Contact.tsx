import React from 'react';
import s from './Contact.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";
import ContactForm from "./contact-form/ContactForm";

const Fade = require('react-reveal/Fade');

const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <Fade>
                <div className={`${s.contactWrapper} ${stylesContainer.container}`}>
                    <Title title={'contact me'}/>
                    <ContactForm/>
                </div>
            </Fade>
        </div>
    )
        ;
};

export default Contact;