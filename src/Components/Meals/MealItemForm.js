import React from "react";
import Classes from "./MealItmeForm.module.css"

const MeaLItemForm =  () =>{

    return(
        <form className={Classes.form}>
      <label>Amount</label>  <input type="number"  min={0} max={5} />
     <div className={Classes.fdiv}> <button className={Classes.btn}>+ Add</button> </div>
        </form>
    )
}
export default MeaLItemForm;