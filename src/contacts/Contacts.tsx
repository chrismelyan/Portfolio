import React from 'react';
import s from './Contacts.module.css'
import stylesContainer from '../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${stylesContainer.container}`}>
                <h2 className={s.title}>Contacts</h2>
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

export default Contacts;