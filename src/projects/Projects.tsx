import React from 'react';
import s from './Projects.module.css'
import Project from "./project/Project";
import stylesContainer from "../common/styles/Container.module.css";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${stylesContainer.container}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project title={'Todolist'} description={'sjdhfbvsdfbkshdbfkcsjdhb'}/>
                    <Project title={'Social Network'} description={'sjdhfbvsdfbkshdsdfvsdfvbfkcsjdhb'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;