import React from "react"

const Greet = prop => {
    return (
        <div>
            <h1> Hello World {prop.name} </h1>
            <h2>{prop.children[0]}</h2>
            <h5>{prop.children[1]}</h5>

        </div>
    );
}

export default Greet