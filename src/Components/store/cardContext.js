
import React from "react";

const Cardctx =  React.createContext({
    item : [] ,
    TotalAmount :0,
    addItem : (item) => {},
    removeItem : (id) => {}

});

export default Cardctx;