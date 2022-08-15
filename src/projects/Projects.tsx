import React from 'react';
import s from './Projects.module.scss'
import Project from './project/Project';
import stylesContainer from '../common/styles/Container.module.css';
import Title from '../common/components/title/Title';

const Fade = require("react-reveal/Fade");

const Projects = () => {
    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${stylesContainer.container}`}>
                <Fade top>
                    <Title title={'Here are a few of my projects'}/>
                </Fade>
                <div className={s.projects}>
                    <Fade bottom>
                        <Project
                            img={"todolist"}
                            title={'Todolist'}
                            description={'Stack: TypeScript, React, Redux, Redux Toolkit, Redux-Thunk, ' +
                                'React-Router-dom, Axios, Formik, TDD, Material UI, Storybook.'}
                            link={'https://chrismelyan.github.io/TodoList/'}
                            codeLink={'https://github.com/chrismelyan/TodoList'}
                        />
                        <Project
                            img={"cards"}
                            title={'Learning App'}
                            description={'Stack: TypeScript, React, Redux, Redux-Thunk, ' +
                                'React-Router-dom, Axios, Formik, Material UI. Team development.'}
                            link={'https://sergeyichnik.github.io/projectFriday/'}
                            codeLink={'https://github.com/SergeyichNik/projectFriday'}
                        />
                        <Project
                            img={"social"}
                            title={'Social Network'}
                            description={'Stack: TypeScript, React, Redux, Redux-Thunk, ' +
                                'React-Router-dom, Axios, Formik, Reselect, TDD.'}
                            link={'https://chrismelyan.github.io/Social-Network/'}
                            codeLink={'https://github.com/chrismelyan/Social-Network'}
                        />
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Projects;