import React from 'react';
import s from './Projects.module.css'
import Project from "./project/Project";
import stylesContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${stylesContainer.container}`}>
                <Title title={'projects'}/>
                <div className={s.projects}>
                    <Project title={'Todolist'} description={'sjdhfbvsdfbkshdbfkcsjdhb'}/>
                    <Project title={'Social Network'} description={'sjdhfbvsdfbkshdsdfvsdfvbf sdkfjsdf asdkj sdfkj kcsjdhb'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;