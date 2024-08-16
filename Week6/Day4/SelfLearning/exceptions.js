// *Table Of Contents
// Exceptions
// try catch
// finally
// The throw operator

// *Exceptions
// Exceptions are a mechanism that makes it possible for code that runs into a problem to raise(or throw) an exception. An exception can be any value.
// Their power lies in the fact that you can set “obstacles” along the stack to catch the exception.Once you’ve caught an exception, you can do something with it to address the problem and then continue to run the program.

// *Try Catch
// Catching one is done by wrapping a piece of code in a try block, followed by the catch keyword.
// When the code in the try block causes an exception to be raised, the catch block is evaluated, with the name in parentheses bound to the exception value.
// Once the catch block finishes—or if the try block finishes without problems—the program proceeds beneath the entire try/catch statement.
// *Syntax
// try {
//  lines of code
// } catch (e) { // e is exception value
//  lines of code
// }
// *Finally
// Contains code that is executed regardless of the program flow, if there was an exception or if there wasn’t:
// try {
//     lines of code
// } catch (e) { // might be omitted
//     lines of code
// } finally {
//     lines of code
// }
// *Scheme
// |--> Start
//    |--> Execute try block
//       |--> Error
//          |--> Yes
//          |  |--> Ignore the rest of the try block and execute catch block
//          |     |
//          |--> No
//             |--> Ignore catch block, execute finally block (if exists)
//                |--> End
// *Example
const func = () => {
    try {
        console.log("starting the try block")
        //Unexisting variable
        hello
        //not accessed if there is an error with the above code
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(err)
    } finally {
        console.log("Function done")
    }
}

func();

// !Note from the documentation:
// For all built -in errors, the error object has two main properties:
// name: Error name. For instance, for an undefined variable that’s "ReferenceError".
// message: Textual message about error details.
// stack: Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.
// Example
const func2 = () => {
    try {
        console.log("starting the try block")
        hello
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(`
        Error Name : ${err.name}, 
        Error Msg : ${err.message},
        Error Stack : ${err.stack}`)
    } finally {
        console.log("Function done")
    }
}
func2();

// *The Throw Operator
// It generates an error.
// Syntax
// throw <error object>
//JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError, TypeError and others.

// Error	Meaning
// EvalError	Creates an instance representing an error that occurs regarding the global function eval()
// InternalError	Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g., “too much recursion”.
// RangeError	Creates an instance representing an error that occurs when a numeric variable or parameter is outside of its valid range.
// ReferenceError	Creates an instance representing an error that occurs when de-referencing an invalid reference.
// SyntaxError	Creates an instance representing a syntax error.
// TypeError	Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
// URIError	Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed invalid parameters.

// Example:
const func3 = () => {
    try {
        console.log("starting the try block")
        hello
        console.log("finishing the try block")
    } catch (err) {
        //Check the type of error
        if (err instanceof ReferenceError) {
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message},
                Error Stack : ${err.stack}`)
        } else {
            console.log("Other Error")
        }
    } finally {
        console.log("Function done")
    }
}

func3()

// Example

const func5 = (a, b) => {
    let result;
    try {
        result = a / b
        if (b == 0) {
            throw new Error('Cannot divide by Zero');
        }
    } catch (err) {
        if (err instanceof ReferenceError) {
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        } else {
            console.log("Other Error")
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        }
    } finally {
        console.log("Function done")
    }
}

func5(3, 0)
