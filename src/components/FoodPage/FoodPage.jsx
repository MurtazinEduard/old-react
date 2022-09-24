import React from 'react';
import FoodItem from './FoodItem/FoodItem';
import style from './FoodPage.module.css'
const FoodPage = ({food}) => {
    return (
        <div className={style.foodPage}>
            
            {food.name}
            1
        </div>
    );
};

export default FoodPage;