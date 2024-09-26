import Example from './conponents/Example';
import ExampleClass from './conponents/ExampleClass';
import ExampleUnmount from './conponents/ExampleUnmount';
import Counter from './conponents/Counter';
import './App.css';
import { useState } from 'react';
function App() {
    const [unmount, setUnmount] = useState(false);
    console.log('unmount=>', unmount);
    return (
        <>
            <div style={{ backgroundColor: '#888' }}>
                {/* <Example num={1} /> */}
                {/* <ExampleClass num={2} /> */}
                {/* <button onClick={() => setUnmount(!unmount)}>
        {unmount ? "Mount" : "UnMount"}
      </button>
      {unmount ? null : <ExampleUnmount/>} */}
                <Counter />
            </div>
        </>
    );
}

export default App;
