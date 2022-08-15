import React from 'react';
import s from './Project.module.scss';

type ProjectType = {
    title: string
    description: string
    img: string
    link: string
    codeLink: string
}

const Project = (props: ProjectType) => {
    return (
        <div className={s.projectBlock}>
            <div className={`${s.imgContainer} ${s[props.img]}`}>
                <div className={s.overlay}>
                    <div>
                        <a className={s.watchButton}
                           href={props.link}
                           target={"_blank"}
                           rel={"noopener noreferrer"}
                        >Watch</a>
                    </div>
                </div>
            </div>
            <div className={s.projectDescription}>
                <h5 className={s.projectTitle}>{props.title}</h5>
                <span className={s.description}>{props.description}</span>
                <div>
                    <a href={props.codeLink}
                       className={s.imgLink}
                       target={"_blank"}
                       rel={"noopener noreferrer"}
                    >GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Project;