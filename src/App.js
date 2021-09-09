import data from './foods.json';
import { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './Components/FoodBox';



function App() {
  const [foods, setFoods] = useState(data);

  return (
    <div className="App">
      { foods && foods.map((food) => (
        <>
        <FoodBox food={food} />
        <p> {food.name} </p>
        <img src={food.image} width={200} alt="" />
        </>
      ))}
    </div>
  );
}

export default App;
