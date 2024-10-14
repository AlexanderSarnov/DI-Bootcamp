import React, { useState } from 'react';

// Define the Counter component
const Counter: React.FC = () => {
    // Declare state variable 'count' with init val 0
    const [count, setCount] = useState<number>(0);

    // Increment counter function
    const increment = () => setCount(count + 1);

    // Decrement counter function
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h1>Counter App</h1>
            <p>Current count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
