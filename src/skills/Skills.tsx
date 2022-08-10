import React from 'react';
import s from './Skills.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import photo from '../assets/image/photo.png';

const Fade = require("react-reveal/Fade");

const Skills = () => {
    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${s.skillsContainer} ${stylesContainer.container}`}>
                <Fade top>
                    <Title title={'My tool belt for success'}/>
                </Fade>
                <Fade>
                    <div className={s.skillsWrapper}>
                        <div className={s.paragraph}>
                            <p>
                                I have experience in creating SPA using Typescript / React / Redux.
                                Now working on improving my skills in React and looking for
                                an entry-level position as a React Front-end Developer.
                            </p>
                            <p>
                                I am passionate about learning and development. Enjoy working with team members and
                                looking
                                forward to applying my passion for coding to a talented team to develop quality
                                solutions.
                            </p>
                        </div>
                        <img src={photo} alt={'avatar'}/>
                    </div>
                </Fade>
                <Fade right>
                    <div className={s.skills}>
                        <Skill title={'HTML'} icon={'html'}/>
                        <Skill title={'JavaScript'} icon={'javaScript'}/>
                        <Skill title={'CSS/SASS'} icon={'sass'}/>
                        <Skill title={'TypeScript'} icon={'typescript'}/>
                        <Skill title={'React'} icon={'react'}/>
                        <Skill title={'Redux'} icon={'redux'}/>
                        <Skill title={'GitHub'} icon={'github'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;