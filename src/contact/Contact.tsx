import React from 'react';
import s from './Contact.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${s.contactContainer} ${stylesContainer.container}`}>
                <Title title={'contact me'}/>
                <form className={s.formContainer}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button className={s.sendButton}>Send</button>
            </div>
        </div>
    );
};

export default Contact;