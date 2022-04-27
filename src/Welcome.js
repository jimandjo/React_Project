import React from "react";
import BREWTECH from './img/BREWTECH.png'

function Welcome() {
    return (
        <header>
            <h1>BrewTech</h1>
            <br></br>
            <p>Coffee Innovation</p>
            <img src={BREWTECH} alt="Brewtech_Logo" width="100" height="100"></img>

        </header>
    )
}

export default Welcome