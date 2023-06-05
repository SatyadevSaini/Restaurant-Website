import { Fragment } from "react";
import React from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";

const App = () => {
 
  return (
     <Fragment>
        <Header/>
        <main>
          <MealsSummary/>
        </main>
     </Fragment> 
 );

};

export default App;
