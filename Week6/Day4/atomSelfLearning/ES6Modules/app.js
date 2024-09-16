// import { greeting } from "./greeting.js";
// direct import
async function run () {
  const { greeting } = await import("./greeting.js");
  // async import - app.js execution will be paused until
  // the import operation is complete.
  // greeting is imported using destructuring

  const name = "Mike Taylor";
  greeting(name);
};

run();

// the example code cannot be executed and returns an error.
