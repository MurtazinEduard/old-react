import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Footer.module.css'
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footer__price}>Итого: 0 Рублей</div>
            <NavLink className={style.footer_link} to='/basket' >
                <div className={style.footer__basket}>Перейти в корзину</div>
            </NavLink>
            
        </div>
    );
};

export default Footer;