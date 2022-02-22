import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import foodArray from "./Foods"
import {choice, removeItem} from "./Helpers"

class App extends Component {
    render() {
        const choiceMade = choice(foodArray)
        const newFoodArray = removeItem(foodArray, choiceMade)
        return (
           <>
               <p style={{background:'green', color:"white"}}>I'd like one {choiceMade}, please</p>
               <p>Here you go: {choiceMade}</p>
               <p>Delicious! May I have another?</p>
               <p>I'm sorry, we're all out. We have {newFoodArray} left.</p>
           </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));