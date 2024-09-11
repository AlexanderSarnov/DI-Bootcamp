// *Node.js Introduction*

// *1. Install Node.js: https://nodejs.org/en/download/
// !Note: (LTS version - is a better version, because it's more stable (long term support) and is the official recommended version for production.)
// ?REPL?
// *REPL is an abbreviation for Node.js Read-Eval-Print Loop.
// node > fs > will show all fs commands available in the fs module. To exit: (ctrl + C)*2.
// 2. Open your terminal or command prompt
// 3. Create a new directory for your project (e.g., `my-node-directory`)
// 4. Navigate to the project directory using `cd my-node-directory`
// 5. Initialize a new Node.js project by running `npm init -y`
// ?Why so important?
// !It creates a `package.json` file that stores project metadata and dependencies.It shall be in the same directory as your project.
// 6. Create a new JavaScript file (e.g., `index.js`) in the project directory

// HTML, CSS, and JS are like a playground for Node.js.

// Utilizing Event Loop for non-blocking I/O operations
// Modules: NPM (Node Package Manager) - a package manager for Node.js. It lets you use other developers' code. If someone created a calendar module and then used that calendar module in your project, you wouldn't have to reinvent the wheel.
// Built-in modules: Node.js comes with a variety of built-in modules, such as http, fs, path, etc.

// !Note: Node.js runs JS on a V8 engine, which is a JavaScript engine developed by Google. It's used for running and interpreting JavaScript code.
// Node.js uses a C++ library called Libuv to handle non-blocking I/O operations.

// To create a web server will take us 2 years of development. With Node.js, it's relatively easy. We can create a simple web server using the built-in `http` module.
// *Or instead we can use a framework like Express.js

// *Module System*
// 1. Core libraries: Node.js comes with a variety of built-in modules, such as http, fs, path, etc.
// 2. Third-party libraries: You can install additional modules using npm. For example, to install the Express.js framework, you would run `npm install express`.
// 3. Local libraries: You can create your own modules by creating a JavaScript file and exporting functions or variables.
// !4. Modules can be organized into directories and files using a package.json file.

// Reading documentation is like overviewing a newly purchased device. You never know all features (and sometimes even how ta launch it).

// Created several .js files: app.js, server.js, and index.js. and tested them with Node.js. App.js has a function that returns a greeting message, main.js calls function from app.js and logs the result. When funcion is changed in app.js and it is called from main.js then the change will be reflected in the output.

