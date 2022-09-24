import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={style.Navbar}>
            <div className={style.Navbar__main}>
                <div className={style.Navbar__logo}>
                    <NavLink to='/menu'>Логотип/меню</NavLink>
                </div>
                <div className={style.Navbar__navigation}>
                    navigation
                </div>
                <div className={style.Navbar__basket}>
                    <NavLink to='/basket'>BASKET</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;