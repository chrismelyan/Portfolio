import axios from "axios";


export const contactAPI = {
    contactForm (form: ContactFormType) {
        return axios.post<ContactFormType, any>('https://gmail-smpt.herokuapp.com/sendMessage', {form})
    }
};

export type ContactFormType = {
    name: string
    email: string
    message: string
}