import React from 'react';
import s from './About.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import photo from '../assets/image/photo.png';
import ReactTypingEffect from 'react-typing-effect';
import Button from "../common/components/button/Button";

const Fade = require("react-reveal/Fade");

const About = () => {
    return (
        <div className={s.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={s.backgroundPicture}>
                    <Fade>
                        <div className={s.about}>
                                <h1>Christina Melyan</h1>
                                <ReactTypingEffect
                                    className={s.text}
                                    speed={70}
                                    eraseSpeed={70}
                                    eraseDelay={1000}
                                    text={'<code> a frontend developer </code>'}
                                />
                                <div className={s.buttonContainer}>
                                    <Button title={'download CV'} callback={() => {
                                    }}/>
                                </div>
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