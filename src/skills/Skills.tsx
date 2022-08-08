import React from 'react';
import s from './Skills.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards} from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "./skill/styles.css";

const Fade = require("react-reveal/Fade");

const Skills = () => {
    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={`${s.skillsContainer} ${stylesContainer.container}`}>
                <Fade top>
                    <Title title={'My tool belt for success'}/>
                </Fade>
                <div className={s.skillsWrapper}>
                    <div className={s.paragraph}>
                        <p>
                            I have experience in creating SPA using Typescript / React / Redux.
                            Now working on improving my skills in React and looking for
                            an entry-level position as a React Front-end Developer.
                            I am passionate about learning and development. Enjoy working with team members and
                            looking
                            forward to applying my passion for coding to a talented team to develop quality
                            solutions.
                        </p>
                    </div>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Skill title={'HTML'} icon={'html'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Skill title={'JavaScript'} icon={'javaScript'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Skill title={'CSS/SASS'} icon={'sass'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Skill title={'TypeScript'} icon={'typescript'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Skill title={'React'} icon={'react'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Skill title={'Redux'} icon={'redux'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Skill title={'GitHub'} icon={'github'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Skill title={'Material UI'} icon={'material'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Skill title={'Self study'} icon={'learn'}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Skills;