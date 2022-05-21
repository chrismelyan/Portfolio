import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <span className={s.name}>Christina Melyan</span>
            <div className={s.block}>
                <div className={s.item}/>
                <div className={s.item}/>
                <div className={s.item}/>
                <div className={s.item}/>
            </div>
            <span className={s.allRights}>Copyright © 2022 All rights reserved</span>

        </div>
    );
};

export default Footer;