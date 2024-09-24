// import logo from './logo.svg';
import './App.css';
import React from 'react';
import UserFavoritesAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3'

// Exercise1. Declare a constant which value (and HTML tag) will be later rendered on the page.
const myelement = <h1>I Love JSX!</h1>;

// Exercise1. Declare a constant with arithmetic operation for the rendering demonstration.
const sum = 5 + 5;

// Exercise2. Default object for example rendering
const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/**Exercise 1. */}
                <p>Hello World!</p>
                {myelement}
                <p>React is {sum} times better with JSX</p>

                {/**Exercise 2. */}
                <h3>User First Name is: {user.firstName}</h3>
                <h3>User Last Name is {user.lastName}</h3>
                <UserFavoritesAnimals favAnimals={user.favAnimals} />

                {/**Exercise 3. */}
                <Exercise />
            </header>
        </div>
    );
}

export default App;
