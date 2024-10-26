// Exercise 8: switch Statement with Complex Conditions

// Instructions
// Create a function getAction that takes a string representing a user role and returns an action for the user. Use a switch statement with complex conditions to handle multiple roles.

const getAction = (role: string): string => {
    switch (role) {
        case 'admin':
            return 'Manage users and settings';
        case 'editor':
            return 'Edit content';
        case 'viewer':
            return 'View content';
        case 'guest':
            return 'Limited access';
        default:
            return 'Invalid role';
    }
};

// Test the function with different roles
console.log(getAction('admin')); // Output: Manage users and settings
console.log(getAction('editor')); // Output: Edit content
console.log(getAction('viewer')); // Output: View content
console.log(getAction('guest')); // Output: Limited access
console.log(getAction('unknown')); // Output: Invalid role