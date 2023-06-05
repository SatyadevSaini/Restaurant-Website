import { Fragment } from "react";
import React from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import AvailableMeals from "./Components/Meals/AvailableMeals";

const App = () => {
 
  return (
     <Fragment>
        <Header/>
        <main>
          <MealsSummary/>
          <AvailableMeals/>
        </main>
     </Fragment> 
 );

};

export default App;
