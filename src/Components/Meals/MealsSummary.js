  import React from "react";
  import Classes from "./MealsSummary.module.css"

  const MealsSummary = () => {

      return(
         <section className={Classes.summary}>
            <h1>Delicous Food Delivered To you</h1>
            <p>
                Choose your favorite meal from the board section ofa available meals and enjoy the delicous food at your house
            </p>
            <p>
                All our meals are cokked with high-quality ingredients, just-in-time and of course by experenced chef!
            </p>
         </section>
      )
  }
  export default MealsSummary; 