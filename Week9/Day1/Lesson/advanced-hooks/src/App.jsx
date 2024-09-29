import { useState, useReducer, useRef } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

const initialState = {
    count: 0,
};

const ADD = 'increment';
const DEDUCT = 'decrement';
const ADDVALUE = 'addvalue';

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case ADD:
            return { ...state, count: state.count + 1 };
        case DEDUCT:
            return { ...state, count: state.count - 1 };
        case ADDVALUE:
            return { ...state, count: state.count + action.payload };
        default:
            throw new Error('Invalid action type');
    }
};

function App() {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>useReducer</h2>
            <div>
                <h2>useState</h2>
                <button onClick={() => setCount((prev) => prev + 1)}>+</button> {count}{' '}
                <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            </div>
            <div>
                <h2>useReducer</h2>
                <button onClick={() => dispatch({ type: ADD })}>+</button>
                <br />
                <input type="number" ref={inputRef} />
                <button onClick={() => dispatch({ type: ADDVALUE, payload: Number(inputRef.current.value) })}>
                    Add By Input Value
                </button>
                <br /> {state.count} <br />
                <button onClick={() => dispatch({ type: DEDUCT })}>-</button>
            </div>
        </>
    );
}

export default App;
