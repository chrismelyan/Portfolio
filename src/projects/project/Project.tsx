import React from 'react';
import s from './Project.module.css'

type ProjectType = {
    title: string
    description: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.imgContainer}>
                <a href={''} className={s.imgLink}>watch</a>
            </div>
            <div className={s.projectDescription}>
                <h5 className={s.projectTitle}>{props.title}</h5>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;