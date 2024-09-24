// naming with capital letter to make it a component

import React from 'react';
import Post from './components/Post';

const Hello = (props) => {
    console.log(props);

    return (
        // using React.Fragment in order not to overuse <div></div> wrappers, a shorthand of <React.Fragment></React.Fragment> is <></>
        <>
            <h2>{props.title}</h2>
            <h3>{props.sub}</h3>
            {/* <Post /> */}
        </>
    );
};

export default Hello; // make Hello component available for other files to import and use it.


