import React from 'react';
import s from './Skills.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Navigation, Mousewheel, Keyboard} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./skill/styles.css";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${s.skillsContainer} ${stylesContainer.container}`}>
                <Title title={'skills'}/>
                <div className={s.paragraph}>
                    <p>
                        I have experience in creating SPA using Typescript / React / Redux.
                        Now working on improving my skills in React and looking for
                        an entry-level position as a React Front-end Developer.
                        I am passionate about learning and development. Enjoy working with team members and looking
                        forward to applying my passion for coding to a talented team to develop quality solutions.
                    </p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={3}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Skill title={'HTML'} description={'description of HTML and CSS'} icon={'html'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skill title={'JavaScript'} description={'description of Javascript'} icon={'javaScript'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skill title={'CSS/SASS'} description={'description of CSS and SASS'} icon={'sass'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skill title={'TypeScript'} description={'description of Typescript'} icon={'typescript'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skill title={'React'} description={'description of React'} icon={'react'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skill title={'Redux'} description={'description of HTML and CSS'} icon={'redux'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skill title={'GitHub'} description={'description of GitHub'} icon={'github'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skill title={'Material UI'} description={'description of Material UI'} icon={'material'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Skill title={'Self study'} description={'Love learning new things'} icon={'learn'}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Skills;