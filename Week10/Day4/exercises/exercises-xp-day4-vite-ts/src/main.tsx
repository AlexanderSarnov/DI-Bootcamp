// import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Greeting from './components/Greeting.tsx';
import Counter from './components/Counter.tsx';
import UserCard from './components/UserCard.tsx';
import DataFetcher from './components/DataFetcher.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        {/**Use the Greeting component and pass a name prop */}
        <Greeting name="John" />
        {/**Use the Counter component */}
        <Counter />
        {/**Use the UserCard component */}
        <UserCard name="Alice" age={30} />
        <UserCard />
        {/**Use the DataFetcher component */}
        <DataFetcher />
    </StrictMode>
);
