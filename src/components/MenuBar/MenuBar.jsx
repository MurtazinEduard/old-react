import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MenuBar.module.css'
import MenuBarItem from './MenuBarItem.jsx/MenuBarItem';
const MenuBar = ({menu}) => {
    return (
        <div className={style.MenuBar}>
            {menu.map(item => 
                <NavLink to={item.link}>
                    <MenuBarItem {...item}/>
                </NavLink>
            )}
                
            
        </div>
    );
};

export default MenuBar;