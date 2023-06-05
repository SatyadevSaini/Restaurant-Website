import React from "react"
import Classes from "./HeaderCardButton.module.css"
import CartIcon from "../Cart/CardIcon";

const HeaderCardButton = (props) => {

    return (
        <button className={Classes.button}>
            <span className={Classes.icon}>
                <CartIcon/>
            </span>
            <span>
                YourCart
            </span>
            <span className={Classes.badge}> 0 </span>
        </button>
    );
}

export default HeaderCardButton; 