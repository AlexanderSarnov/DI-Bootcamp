// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Example from './components/Example';
import ExampleClass from './components/ExampleClass';
import ExampleUnmount from './components/ExampleUnmount';
import './App.css';

function App() {
    const [unmount, setUnmount] = useState(false);
    console.log('unmount:', unmount);
    return (
        <>
            {/* <Example num={1} /> */}
            {/* <ExampleClass num={2} /> */}
            <button type="button">{unmount ? 'Mount' : 'UnMount'}</button>

            <button type="button">{unmount ? null : <ExampleUnmount />}</button>
        </>
    );
}

export default App;
