// *Today Topics
// Handlers: events, errors, etc.
// Forms

// Daily Challenge from yesterday. Voting app.

// Console
// npm create vite@latests voting-app --template react

// npm i // install npm

// In voting app we have an array of objects and we need to have a voting from the array

//App.js:

// Delete unnecessary stuff
{
    /* <h1>Vote for me:</h1> */
}

// const vote = () => {
//     console.log('vote function');
// }

// languages.map((item, indx) => {
//     return (
//         <div key={indx}>
//             {item.name} {item.votes}
//             <button onClick={() => vote(indx)}>Vote</button>
//         </div>
//     )

// })

// *Here key was to clone the array: const newLanguage = [...languages]

// don't want to touch the state itself but instead use the clone of the array

// always create a new component!

// *starting new lesson
// create components folder in src folder
// new file: Counter.jsx

//  scr/components/Counter.jsx
const Counter = ({ count, setCount}) => {
    return (
        <>
            <h2>My Counter</h2>
            Counts: {count}
            <button onClick={ () => setCount((count) => )}> + </button>
        </>
    );
};
export default Counter;

// App.jsx
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Counter />
        </>
    );
}
