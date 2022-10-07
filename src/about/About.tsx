import React from 'react';
import s from './About.module.scss';
import stylesContainer from '../common/styles/Container.module.css';
import ReactTypingEffect from 'react-typing-effect';
import Button from "../common/components/button/Button";
import myCV from '../assets/files/cv.pdf';
import { saveAs } from "file-saver";

const Fade = require("react-reveal/Fade");

const About = () => {
    const saveFile = () => {
       saveAs(myCV, "CV_Melyan_FD.pdf");
    }

    return (
        <div id={'about'} className={s.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={s.aboutWrapper}>
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
                                <Button style={s.button} title={'download CV'} callback={saveFile}/>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default About;