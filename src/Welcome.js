import React from "react";
import BREWTECH from './img/BREWTECH.png'
import './Welcome.css'

function Welcome() {
    return (
       <> 

        <header class="flexbox-container">
            <img src={BREWTECH} alt="Brewtech_Logo" width="100" height="100"></img>

            <h1>BrewTech - Coffee Innovation</h1>
            
        </header>



        </>
    )
}

export default Welcome