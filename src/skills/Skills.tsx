import React from 'react';
import s from './Skills.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import photo from '../assets/image/photo.png';

const Fade = require("react-reveal/Fade");

const Skills = () => {
    const skills = [
        {id: 1, title: 'HTML', icon: 'html'},
        {id: 2, title: 'JavaScript', icon: 'javaScript'},
        {id: 3, title: 'TypeScript', icon: 'typescript'},
        {id: 4, title: 'CSS/SASS', icon: 'sass'},
        {id: 5, title: 'React', icon: 'react'},
        {id: 6, title: 'Redux', icon: 'redux'},
        {id: 7, title: 'GitHub', icon: 'github'}
    ]
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
                        {skills.map(s => (
                            <Skill key={s.id} title={s.title} icon={s.icon}/>
                        ))}
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;