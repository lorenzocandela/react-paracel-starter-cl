import React from "react"
import ReactDOM from "react-dom"

function App(){
    return (
        <h1>Titolo prova</h1>
    )
}

var rootNode = document.getElementById("app")
ReactDOM.render(<App/>,rootNode)