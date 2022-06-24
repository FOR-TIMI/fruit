import ReactDOM from 'react-dom';
import {choice, remove} from './helpers'
import fruit from './foods';
import React from 'react';

function fruitGenerator(){
 return fruit[Math.floor(Math.random() * fruit.length)]
}
console.log(fruitGenerator())

class App extends React.Component{
    render(){
        const fruitChoice = choice(fruit)
        return (
                <div>
                <p>I would like a {fruitChoice}, please</p>
                <p>Here you go: {remove(fruit,fruitChoice)}</p>
                <p>Delicious! May I have another?</p>
                <p>I'm sorry, we're all out. We have {fruit.length} left.</p>
                </div>
                )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
