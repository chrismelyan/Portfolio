import React from 'react';
import s from './About.module.scss';
import stylesContainer from '../common/styles/Container.module.css';

const About = () => {
    return (
        <div className={s.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={s.photo}>
                    <div className={s.about}>
                        <h1>Christina Melyan </h1>
                        <p className={s.text}> a frontend developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;