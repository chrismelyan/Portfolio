import React from 'react';
import s from './Skill.module.css'

type SkillType = {
    title: string
    description: string
}

const Skill = (props: SkillType) => {
    return (
        <div className={s.skill}>
           <div className={s.icon}/>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Skill;