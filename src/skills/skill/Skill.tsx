import React from 'react';
import s from './Skill.module.scss'

type SkillType = {
    title: string
    icon: string
}
const Skill = (props: SkillType) => {
    const iconStyle = `${s.icon} ${s[props.icon]}`
    return (
        <div className={s.skill}>
           <div className={iconStyle}/>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Skill;