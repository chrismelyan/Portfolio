import React from 'react';
import s from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={s.nav}>
            <a className={`${s.pageLink} ${s.active}`} href="">About</a>
            <a className={s.pageLink} href="">Skills</a>
            <a className={s.pageLink} href="">Projects</a>
            <a className={s.pageLink} href="">Contact</a>
        </div>
    );
};

export default Nav;