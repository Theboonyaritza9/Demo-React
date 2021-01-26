import React from "react";

function Header() {


    const styleSection = {
        backgroundColor: "#000", 
        color: "#fff"
    }

    return (
        <header>
            <h1>React App</h1>
            <section style={styleSection}>section</section>
            <section style={{backgroundColor: "black", color: "white"}}>section</section>
        </header>
    )
}

export default Header