import axios from "axios";


export const contactAPI = {
    contactForm (form: ContactFormType) {
        return axios.post<ContactFormType, any>('http://localhost:3010/sendMessage', {form})
    }
};

export type ContactFormType = {
    name: string
    email: string
    message: string
}