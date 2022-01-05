import React from "react";
import './display.css'
import Cards from "./cards";



function Display({allBooks}) {
    return(
        <div>
           <Cards allBooks={allBooks}/> 
        </div>
    )
}

export default Display