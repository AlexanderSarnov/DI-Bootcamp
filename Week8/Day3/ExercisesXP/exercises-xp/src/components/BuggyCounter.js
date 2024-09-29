// Import React and Component from the 'react' library
import React, { Component } from 'react';

// Define the BuggyCounter class component
class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        // Initialize state with counter set to 0
        this.state = { counter: 0 };
    }

    // Define the handleClick method to increment the counter
    handleClick = () => {
        this.setState(({ counter }) => {
            if (counter === 4) {
                // Throw an error when counter reaches 5
                throw new Error('I crashed!');
            }
            return { counter: counter + 1 };
        });
    };

    // Render the counter and attach the handleClick method to the onClick event
    render() {
        return <div onClick={this.handleClick}>{this.state.counter}</div>;
    }
}

// Export the BuggyCounter component
export default BuggyCounter;
