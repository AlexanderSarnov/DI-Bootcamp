// import logo from './logo.svg'; --we deleted logo so we need to comment the logo declaration
import Hello from './Hello';
import Post from './components/Post';
import './App.css';

const postArr = [
    { title: 'aaa', sub: 'sub aaa', content: 'abc def' },
    { title: 'bbb', sub: 'sub bbb', content: 'abc def' },
    { title: 'ccc', sub: 'sub ccc', content: 'def ccc' },
];

function App() {
    return (
        // jsx syntax is combination of html and javascript
        <div className="App">
            <header className="App-header">
                {/* <h2>Welcome to React</h2> */}
                {/* <p>Hello, World!</p> */}
                {/* <Hello title="Hello title 1" sub="subtitle 1" /> */}
                {/* <Hello title="Hello title 2" sub="subtitle 2" /> */}
                {/* <Post title="Title" sub="SUB" content="CONTENT" /> */}
                {/*here we use component with the props decomposed parameter*/}
                {/* we use the component here with self-closing tag. */}
                {postArr.map((item) => {
                    return <Post key={item.title} title={item.title} sub={item.sub} content={item.content} />;
                })}
            </header>
        </div>
    );
}

export default App;
