import React, { Fragment } from "react";
import HeaderImage from '../../assists/Food.jpg'
import Classes from '../Layout/Header.module.css'
import HeaderCardButton from "./HeaderCardButton";

    const Header = (props) => {

        return(
          <Fragment>
              <header className={Classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton onClick ={props.showCartHandler}/>
              </header>
              <div>
                <img src={HeaderImage} alt="Food is Amazing !" className={Classes["main-image"]} />
              </div>
          </Fragment>
        );

    }

    export default Header;