import React from 'react';
import s from './ContactForm.module.scss';
import d from '../../common/components/button/Button.module.scss';
import {useFormik} from "formik";

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            alert(`${values.name} ${values.message}`)
        }
    });
    return (
        <div className={s.contactContainer}>
            <form className={s.formContainer} onSubmit={formik.handleSubmit}>
                <input
                    className={s.textField}
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder={'Your name'}
                />
                <input
                    className={s.textField}
                    placeholder={'Your email'}
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <textarea
                    className={s.textarea}
                    placeholder={'Your message'}
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