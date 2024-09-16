async function run () {
  try {
    const { add } = await import ("./math.js");
    console.log(add(1,2)); // Output: 3
  } catch (error) {
    console.log("Failed to load module:", error);
  }
};

run();

// make sure to use add in curly braces or it will not be a function

// exercise completed without package.json... or maybe it works from
// the level above?
