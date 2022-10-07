import React, {useState} from 'react';
import s from './ContactForm.module.scss';
import d from '../../common/components/button/Button.module.scss';
import {useFormik} from "formik";
import {contactAPI, ContactFormType} from "../../api/contact-api";
import ModalWindow from "../../common/components/modalWindow/modalWindow";

const ContactForm = () => {
    const [sendResult, setSendResult] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false);

    const messageSent = 'Thank you! Your message has been sent.';
    const errorMessage = 'Oops! Something went wrong. Try again.';

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: values => {
            const errors = {
                name: '',
                email: '',
                message: ''
            };
            if (!values.name) {
                errors.name = 'Name is required';
            }
            if (!values.email) {
                errors.email = 'Email is required';
            }
            if (!values.message) {
                errors.message = 'Please text a message';
            }
            return errors;
        },
        onSubmit: (values: ContactFormType) => {
            contactAPI.contactForm(values)
                .then(() => {
                    setSendResult(true);
                    formik.resetForm();
                })
                .catch(() => {
                    setSendResult(true);
                    setError(true);
                })
        }
    });
    return (
        <div className={s.contactContainer}>
            {sendResult && <ModalWindow message={messageSent} setSend={setSendResult} setError={setError}/>}
            {error && <ModalWindow message={errorMessage} setSend={setSendResult} setError={setError} error={error}/>}
            <form className={s.formContainer} onSubmit={formik.handleSubmit}>
                <input
                    className={s.textField}
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder={formik.errors.name || 'Your name'}
                />
                <input
                    className={s.textField}
                    placeholder={formik.errors.email || 'Your email'}
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <textarea
                    className={s.textarea}
                    placeholder={formik.errors.message || 'Your message'}
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                />

                <div className={s.buttonContainer}>
                    <button type={'submit'} className={`${s.button} ${d.button}`}>Send</button>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;