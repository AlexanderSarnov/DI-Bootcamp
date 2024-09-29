// Import React and Component from the 'react' library
import React, { Component } from 'react';

// Define the ErrorBoundary class component
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        // Initialize state with error and errorInfo set to null
        this.state = { error: null, errorInfo: null };
    }

    // Update state with error information when an error is caught
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    }

    // Render the error message if an error is caught, otherwise render children
    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

// Export the ErrorBoundary component
export default ErrorBoundary;
