import React from 'react';
import s from './About.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import photo from '../assets/image/photo.png';

const Fade = require("react-reveal/Fade");

const About = () => {
    return (
        <div className={s.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={s.backgroundPicture}>
                    <Fade>
                        <div className={s.about}>
                            <h1>Christina <span>Melyan</span></h1>
                            <p className={s.text}> a frontend developer</p>
                        </div>
                        <div className={s.photo}>
                            <img src={photo} alt={'avatar'}/>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;