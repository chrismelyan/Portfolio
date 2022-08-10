import React from 'react';
import s from './Projects.module.scss'
import Project from './project/Project';
import stylesContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';
import socialImg from '../assets/image/social-network.png';
import todolistImg from '../assets/image/todolist.png';
import learningApp from '../assets/image/learning-app.png';

const Fade = require("react-reveal/Fade");

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImg})`,
    };
    const todolist = {
        backgroundImage: `url(${todolistImg})`,
    };
    const cards = {
        backgroundImage: `url(${learningApp})`,
    }

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${stylesContainer.container}`}>
                <Fade top>
                    <Title title={'Here are a few of my projects'}/>
                </Fade>
                <div className={s.projects}>
                    <Fade bottom>
                        <Project
                            style={todolist}
                            title={'Todolist'}
                            description={'description of todolist project'}
                            link={'https://chrismelyan.github.io/TodoList/'}
                        />
                        <Project
                            style={cards}
                            title={'Learning App'}
                            description={'description of social network project'}
                            link={'https://sergeyichnik.github.io/projectFriday/'}
                        />
                        <Project
                            style={social}
                            title={'Social Network'}
                            description={'description of social network project'}
                            link={'https://chrismelyan.github.io/Social-Network/'}
                        />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Projects;