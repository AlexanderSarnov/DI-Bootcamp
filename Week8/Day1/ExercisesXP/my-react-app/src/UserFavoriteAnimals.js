import React, { Component } from 'react';

// here class is a constructor for the repetitive usage in the other components

class UserFavoritesAnimals extends Component {
    render() {
        const { favAnimals } = this.props;

        return (
            <>
                <h3>User's Favorite Animals</h3>
                <ul>
                    {favAnimals.map((animal, index) => (
                        <li key={index}>
                            <small>{animal}</small>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default UserFavoritesAnimals;
