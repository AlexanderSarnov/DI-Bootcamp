import { useRef, useState } from 'react';

export default function Events() {
    const clickMe = () => {
        alert('I was clicked');
    };

    const inputRef = useRef(null);

    const [isToggleOn, setIsToggleOn] = useState(true);

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            alert(inputRef.current.value);
        }
    }

    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <>
            <button onClick={clickMe}>Click Me</button>
            <div>
                <p>Exercise 8:</p>
                <input ref={inputRef} onKeyDown={(e) => handleKeyDown(e, inputRef)} type="text" />
            </div>
            <div style={{ border: 'thin solid black', margin: '20px', padding: '10px' }}>
                <p>Exercise 9:</p>
                <button onClick={handleToggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
            </div>
        </>
    );
}
