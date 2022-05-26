import React from 'react';
import s from './Skills.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.skillsContainer} ${stylesContainer.container}`}>
                <Title title={'skills'}/>
                <div className={s.skills}>
                    <Skill title={'HTML'} description={'description of HTML and CSS'} icon={'html'}/>
                    <Skill title={'JavaScript'} description={'description of Javascript'} icon={'javaScript'}/>
                    <Skill title={'CSS/SASS'} description={'description of CSS and SASS'} icon={'sass'}/>
                    <Skill title={'React'} description={'description of React'} icon={'react'}/>
                    <Skill title={'Redux'} description={'description of HTML and CSS'} icon={'redux'}/>
                    <Skill title={'GitHub'} description={'description of GitHub'} icon={'github'}/>
                    <Skill title={'Material UI'} description={'description of Material UI'} icon={'material'}/>
                    <Skill title={'Self study'} description={'Love learning new things'} icon={'learn'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;