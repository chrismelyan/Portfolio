import React from 'react';
import s from './Project.module.scss'

type ProjectType = {
    title: string
    description: string
    style: { backgroundImage: string }
    link: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.imgContainer} style={props.style}/>
            <div className={s.projectDescription}>
                <h5 className={s.projectTitle}>{props.title}</h5>
                <span className={s.description}>{props.description}</span>
                <div>
                    <a href={props.link} className={s.imgLink}>Watch</a>
                </div>
            </div>
        </div>
    );
};

export default Project;