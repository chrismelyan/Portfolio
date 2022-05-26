import React from 'react';
import s from './Title.module.scss'

type TitleType = {
    title: string
}

const Title = (props: TitleType) => {
    return (
        <div className={s.title}>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Title;