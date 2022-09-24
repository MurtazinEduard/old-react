import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MenuBarItem.module.css'
const MenuBarItem = ({name}) => {
    return (
        <div className={style.MenuBar__main}>
            {name}
                
        </div>
    );
};

export default MenuBarItem;