import React from 'react';
import s from "../button/Button.module.scss";

type ButtonPropsType = {
    title: string
    callback: () => void
}

const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button onClick={() => props.callback} className={s.button}>{props.title}</button>
        </div>
    );
};

export default Button;