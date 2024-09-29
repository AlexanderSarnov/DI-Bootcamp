// import logo from './logo.svg';
import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <div className="App">
            <ErrorBoundary>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
        </div>
    );
}

export default App;
