import React, {useState} from 'react';
import * as Yup from 'yup';
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

    const validation = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().required('Email is required'),
        message: Yup.string().required('Please text your message')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: validation,
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