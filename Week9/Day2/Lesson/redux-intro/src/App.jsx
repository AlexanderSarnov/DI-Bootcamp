import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Counter from './components/Counter';
import InputText from './components/InputText';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

function App(props) {
    const [count, setCount] = useState(0);
    // const title = useSelector((state) => state.textRenderer.text);

    return (
        <>
            <h2>{props.myTitle}</h2>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            {count}
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            <Counter />
            <InputText />
        </>
    );
}

// export default App;
const mapStateToProps = (state) => {
    return {
        myTitle: state.textReducer.text(),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
