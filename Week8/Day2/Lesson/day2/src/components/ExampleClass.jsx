import React, { Component } from 'react';

class ExampleClass extends React.Component {
    constructor() {
        super();
        // this.users = [];
        this.state = {
            users: [],
            text: '',
            // text: '',
        };
        console.log('1 constructor called');
    }

    getUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Data:', data);
            this.setState({ users: data });
            // this.users = data;
            // console.log('Users:', this.users);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    componentDidMount = () => {
        console.log('3 componentDidMount');
        this.getUsers();
        // alert('hello');
    };

    componentDidUpdate = (prevProps, prevState) => {
        console.log('4 componentDidUpdate', prevProps, prevState);
        // alert('updated');
        // this.getUsers();
    };

    handleChange = async (e) => {
        console.log(e.target.value);
        this.setState({ text: e.target.value });
    };

    render() {
        const { users, text } = this.state;

        const filtered = users.filter((item) => {
            return item.name.toLowerCase().includes(this.state.text.toLowerCase());
        });

        console.log('2 render called');
        return (
            <>
                <h2>{this.props.num}. This is an example of a class component.</h2>
                <input onChange={(e) => this.handleChange(e)} placeholder="Search..." />
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                {filtered.map((item) => {
                    return <div key={item.id}>{item.name}</div>;
                })}
            </>
        );
    }
}

export default ExampleClass;
