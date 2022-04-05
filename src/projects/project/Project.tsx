import React from 'react';
import s from './Project.module.css'

type ProjectType = {
    title: string
    description: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.img}>
                <a href={''} className={s.link}>watch</a>
            </div>
            <div className={s.projectName}>
                <h3 className={s.title}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;