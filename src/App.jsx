import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import Basket from './pages/Basket'

function App() {
  const [sushi, setSushi] = React.useState([])
    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
        .then((resp) => resp.json())
        .then(json => {
        setSushi(json.sushi);
        });
    }, []);

    const [menu, setMenu] = React.useState([])
    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
        .then((resp) => resp.json())
        .then(json => {
        setMenu(json.menu);
        });
    }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      <Route exact path='/' component={Home}/>
      <Route path='/menu' render={() => <Home menu={menu} sushi={sushi}/>}/>
      <Route path='/basket' render={() => <Basket items={menu}/>}/>
    </BrowserRouter>
  );
}

export default App;
