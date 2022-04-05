import React from 'react';
import s from './Contacts.module.css'
import stylesContainer from '../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${stylesContainer.container}`}>
                <h2 className={s.title}>Contacts</h2>
                <div className={s.inputArea}>
                    <input/>
                    <input/>
                    <textarea/>
                </div>
                <button className={s.sendButton}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;