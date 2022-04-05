import React from 'react';
import s from './About.module.css'
import styleContainer from '../common/styles/Container.module.css'

const About = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.about}>
                    <span>Hi there</span>
                    <h1>I am Christina Mialyan</h1>
                    <p>a frontend developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default About;