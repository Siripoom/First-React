import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./Header";
import FoodItem from "./FoodItem";
import FoodPost from "./FoodPost";
import foods from "./data/foods";
import { useState } from "react";

function App() {
  const [selcetedFood, setSelectedFood] = useState(null);

  function onFoodOpenClick(food) {
    setSelectedFood(food);
  }

  function offFood(food){
    setSelectedFood(food);
  }

  const foodElements = foods.map((food, index) => {
    return <FoodItem  key={index} food={food} onFoodOpenClick={onFoodOpenClick} />;
  });

  let foodPost = null;
  if (!!selcetedFood) {
    foodPost = <FoodPost food={selcetedFood} offFood={offFood} />;
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="app-grid">
        {foodElements}
        {/* <FoodItem food={foods} /> */}
        {/* <FoodItem title="HAMBURGER" thumbnailUrl="/images/burger.jpg" />
        <FoodItem title="KEBAB" thumbnailUrl="/images/kabub.jpg" />
        <FoodItem title="STEAK" thumbnailUrl="/images/steak.jpg" /> */}
      </div>
      {/* <FoodPost /> */}
      {foodPost}
    </div>
  );
}

export default App;
