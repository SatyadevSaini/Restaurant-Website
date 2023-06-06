import { Fragment } from "react";
import React from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import Cart from "./Components/Cart/Cart";

const App = () => {
 
  return (
     <Fragment>
     <Cart/> 
        <Header/>
        <main>
          <MealsSummary/>
          <AvailableMeals/>
        </main>
     </Fragment> 
 );

};

export default App;
