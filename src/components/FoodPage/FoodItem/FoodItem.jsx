import React from 'react';
import style from './FoodItem.module.css'
import { NavLink } from 'react-router-dom';
const FoodItem = ({name, imageUrl, price}) => {
    return (
        <div className={style.FoodItem__main}>
            <NavLink className={style.link} to=''>
            <div className={style.food__item}>
                <img src={imageUrl}/>
                <h2 className={style.food__item__name}>{name}</h2>
            </div>
            </NavLink>
            <div className={style.counter}>
                <div>{price}р.</div>
                <div className={style.counter__value}>
                    <div className={style.counter__button}>+</div>
                    <div>Count</div>
                    <div className={style.counter__button}>-</div>
                </div>
                
            </div>
        </div>
    );
};

export default FoodItem;