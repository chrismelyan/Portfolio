import React from 'react';
import s from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.skillsContainer} ${stylesContainer.container}`}>
                <Title title={'skills'}/>
                <div className={s.skills}>
                    <Skill title={'React'} description={'description of React'}/>
                    <Skill title={'HTML and CSS'} description={'description of HTML and CSS'}/>
                    <Skill title={'JavaScript'} description={'description of Javascript'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;