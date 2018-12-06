import React from "react"

function SayHi(props){
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <p>You are an awesome person!</p>
        </div>
    )
}

export default SayHi