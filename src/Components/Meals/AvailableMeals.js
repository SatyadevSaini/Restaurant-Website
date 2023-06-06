import React from "react";
import Classes from "./AvailableMeal.module.css"
import Card from "../UI/Card";
import MeaLItemForm from "./MealItemForm";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
    {
        id: 'm5',
        name: 'Momos',
        description: 'A Chines Disc!!!',
        price: 16.5,
      },
  ];

  const AvailableMeals = () => {

            const MealList = DUMMY_MEALS.map( meal => <div className={Classes.item}> <div className={Classes.first}> <h3 className={Classes.name}> {meal.name}</h3> 
            <p className={Classes.description} >{meal.description}</p>
            <h3 className={Classes.price}> ${meal.price}</h3>  
            </div> <div className={Classes.sec}>{<MeaLItemForm/>}</div>  </div>    )

    return(
        
        <section className={Classes.meals}>
        <Card>
        <ul>
            {MealList}
            </ul>
        </Card>
        </section>
    );
  }
  export default AvailableMeals;