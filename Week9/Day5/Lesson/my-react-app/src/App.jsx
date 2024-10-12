// src/App.jsx
import React from 'react';
import PostsList from './features/posts/PostsList';
import UsersBox from './features/users/UsersBox';
import './post.css';

function App() {
    return (
        <div className="App">
            <UsersBox />
            <PostsList />
        </div>
    );
}

export default App;
