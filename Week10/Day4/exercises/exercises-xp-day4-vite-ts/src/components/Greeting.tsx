import { FC } from 'react';

// Define the interface for the component's props
interface GreetingProps {
    name: string;
}

// Create the functional component using the defined props interface
const Greeting: FC<GreetingProps> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

// Export the component to be used later
export default Greeting;
