import React from 'react';
import FoodPage from '../components/FoodPage/FoodPage';
import Footer from '../components/Footer/Footer';
import MenuBar from '../components/MenuBar/MenuBar';
import Sort from '../components/Sort/Sort';
import { Route } from 'react-router';

const Home = ({menu, sushi}) => {

    console.log(menu)
    return (
        <div>
            <MenuBar menu={menu}/>
            <hr/>
            <Sort items={['популярности', 'цене', 'алфавиту']}/>
            {menu.map(route => 
                <Route path={route.link} render={() => <FoodPage />}/>
            )}
            <Route exact path='/menu/' render={() => <FoodPage/>}/>
            <Footer/>
        </div>
    );
};

export default Home;