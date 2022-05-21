import React from 'react';
import s from './Title.module.css'

type TitleType = {
    title: string
}

const Title = (props: TitleType) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    );
};

export default Title;