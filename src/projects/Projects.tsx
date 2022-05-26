import React from 'react';
import s from './Projects.module.scss'
import Project from './project/Project';
import stylesContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';
import socialImg from '../assets/image/social-network.png';
import todolistImg from '../assets/image/todolist.png';

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`,
    };
    const todolist = {
        backgroundImage: `url(${todolistImg})`,
    };

    return (
        <div className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${stylesContainer.container}`}>
                <Title title={'projects'}/>
                <div className={s.projects}>
                    <Project
                        style={todolist}
                        title={'Todolist'}
                        description={'description of todolist project'}
                    />
                    <Project
                        style={social}
                        title={'Social Network'}
                        description={'description of social network project'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;