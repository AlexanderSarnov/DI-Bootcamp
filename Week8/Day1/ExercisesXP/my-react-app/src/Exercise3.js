import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
    render() {
        const style_header = {
            color: 'white',
            backgroundColor: 'DodgerBlue',
            padding: '10px',
            fontFamily: 'Arial',
        };
        const colRed = { color: 'red' };
        const bgLightBlue = { backgroundColor: 'lightblue' };
        const containerStyle = {
            display: 'flex',
            alignItems: 'center',
            padding: '100px 20px',
            backgroundColor: 'black',
        };
        const imageStyle = { marginRight: '25px' };
        const paragraphStyle = { fontSize: '100px', color: 'rgb(97, 219, 251)' };
        return (
            <>
                <h1 style={{ ...colRed, ...bgLightBlue, ...style_header }}>This is a Header</h1>
                {/* using spread({...colRed, ...bgLightBlue}) to combine the styles */}
                <p style={colRed}>This is a paragraph</p>
                <a href="" target="">
                    This is a link
                </a>
                <form action="">
                    <h3 style={colRed}>This is a Form:</h3>
                    <p>Enter your name:</p>
                    <div style={{ display: 'inline-block' }}>
                        <input type="text" />
                        <input type="submit" value="Submit" />
                    </div>
                    <p className="para">Here is an image:</p>
                    <div style={containerStyle}>
                        <img src="./logo512.png" alt="React" width="150" height="150" style={imageStyle} />
                        <a style={paragraphStyle}>React</a>
                    </div>
                    <p>This is a list:</p>
                    <ul style={{ listStylePosition: 'inside' }}>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </form>
            </>
        );
    }
}

export default Exercise;
