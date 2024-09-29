import { useState, useRef } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

/**
 *
 * create context - and wrap the context in
 * share context
 * use context
 */

function App() {
    const [count, setCount] = useState(0);
    // const myRef = useRef(5);
    // const inputRef = useRef();

    // console.log(myRef);

    let name = 'Dan';
    const nameRef = useRef('John');

    // useEffect(() => {}, []);

    // const showRef = () => {
    //     console.log(inputRef.current);
    //     console.log(inputRef.current.value);
    //     myRef.current.style.backgroundColor = 'green';
    // };

    const changeName = () => {
        name - 'Anne';
        nameRef.current = 'Marry';

        console.log(name);
        console.log(nameRef);
    };

    return (
        <>
            {/* <h2 ref={myRef}>useRef</h2> */}
            {/* <input type="email" ref={inputRef} />
            <button onClick={showRef}>Show</button> */}

            <h2>useRef</h2>
            <h2>Name: {name}</h2>
            <h2>Name Ref: {nameRef.current}</h2>
            <button onClick={changeName}>ChangeName</button>
            <button onClick={() => setCount((count) => count + 1)}>Count: {count}</button>
        </>
    );
}

export default App;

// with useRef I can call values or ref my DOM elements
