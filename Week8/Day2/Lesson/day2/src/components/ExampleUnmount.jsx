import { useEffect } from 'react';

const ExampleUnmount = (props) => {
    useEffect(() => {
        // cleanup function
        return () => {
            console.log('Component unmounted');
        };
    }, []);
};
export default ExampleUnmount;
