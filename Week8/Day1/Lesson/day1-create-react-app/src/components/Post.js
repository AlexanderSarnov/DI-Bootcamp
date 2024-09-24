import React from 'react'; // is not necessary when using the <></> wrapper

const Post = (props) => {
    const { title, sub, content } = props;
    return (
        <>
            <h1>{title}</h1>
            <p>{sub}</p>
            <small>{content}</small>
        </>
    );
};

export default Post;

/**
 * Create a Post comnponent in src/components folder
 * title, subtitle, content
 * import in App
 */
