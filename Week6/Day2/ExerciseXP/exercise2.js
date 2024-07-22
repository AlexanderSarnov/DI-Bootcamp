// Write a JavaScript program that displays the colors in the following order: “1st choice is Blue.” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint: Use the array methods taught in class and ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "Pink", "Gray", "Purple", "Sky-blue", "Asphalt", "Teal", "Snow-white", "Swamp-green", "Leaf-green", "Salad-green", "Aqua", "Gold", "Silver", "Metallic", "Chrome", "Deep-Purple"];

function getOrdinalSuffix(number) {
    const ones = number % 10;
    const tens = Math.floor(number / 10) % 10;

    if (tens === 1) {
        return "th"; // If the tens digit is 1 (indicating numbers like 11, 12, 13), we always return "th" as the suffix.
    } else {
        switch (ones) { // switch between cases: for number ending on 1 - st, 2 - nd, and so on.
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }
}

colors.forEach((color, index) => {
    const suffix = getOrdinalSuffix(index + 1); // Get suffix for the current position
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});