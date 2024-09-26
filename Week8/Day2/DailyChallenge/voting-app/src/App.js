// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [languages, setLanguages] = useState([
        { name: 'Php', votes: 0 },
        { name: 'Python', votes: 0 },
        { name: 'JavaSript', votes: 0 },
        { name: 'Java', votes: 0 },
    ]);

    const vote = (index) => {
        const newLanguages = [...languages];
        newLanguages[index].votes++;
        setLanguages(newLanguages);
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Vote Your Language!</h1>
            {languages.map((language, index) => (
                <div className="voteContainer" key={index}>
                    <p>{language.votes}</p>
                    <p>{language.name}</p>
                    <button className="voteClick" onClick={() => vote(index)}>
                        Click Here
                    </button>
                </div>
            ))}
        </>
    );
}

export default App;
