import React from 'react';
import s from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.skillsContainer} ${stylesContainer.container}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'React'} description={'description for React'}/>
                    <Skill title={'HTML and CSS'} description={'description for HTML and CSS'}/>
                    <Skill title={'JavaScript'} description={'description for Javascript'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;