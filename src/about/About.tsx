import React from 'react';
import s from './About.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import ReactTypingEffect from 'react-typing-effect';
import Button from "../common/components/button/Button";

const Fade = require("react-reveal/Fade");

const About = () => {


    return (
        <div id={'about'} className={s.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={s.backgroundPicture}>
                    <Fade>
                        <div className={s.about}>
                            <span>Hi there. I'm</span>
                            <h1>Christina Melyan</h1>
                            <ReactTypingEffect
                                className={s.text}
                                speed={70}
                                eraseSpeed={70}
                                eraseDelay={1000}
                                text={'<code> a frontend developer </code>'}
                            />
                            <div className={s.buttonContainer}>
                                <Button style={s.button} title={'download CV'} callback={() => {
                                }}/>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;