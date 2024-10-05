import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount, incrementByArray } from './counterSlice';
import { useState } from 'react';

const Counter = (props) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counterReducer.count);
    const [inputValues, setInputValues] = useState([0, 0]);

    const handleInputChange = (index, value) => {
        const newValues = [...inputValues];
        newValues[index] = Number(value);
        setInputValues(newValues);
    };

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <div>
                <h2>Increment by Number</h2>
                <input type="number" value={inputValues} onChange={(e) => setInputValues(Number(e.target.value))} />
                <button onClick={() => dispatch(incrementByAmount(inputValues[0]))}>Add the input Number/value</button>
            </div>
            <div>
                <h2>Increment by Array of Numbers</h2>
                {inputValues.map((value, index) => (
                    <input
                        key={index}
                        type="number"
                        value={value}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                ))}
                <button onClick={() => dispatch(incrementByArray(inputValues))}>Add the input Numbers/values</button>
            </div>
        </>
    );
};

export default Counter;
