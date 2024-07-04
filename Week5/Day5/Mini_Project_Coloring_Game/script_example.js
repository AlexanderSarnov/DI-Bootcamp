// !!Create and call functions for coloring - FROM EXAMPLE
let color = null;
let mousedown = false;

let body = document.getElementsByTagName("body")[0];
let colorBlocks = document.querySelectorAll("#sidebar > *");
let fillBlocks = document.querySelectorAll("#main > *");
let clearButton = document.getElementsByTagName("button")[0];

clearButton.addEventListener("click", function () {
    for (fillBlock of fillBlocks) {
        fillBlock.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function () {
    mousedown = true;
})

body.addEventListener("mouseup", function () {
    mousedown = false;
})


for (color_block of color_blocks) {
    color_block.addEventListener("click", function (event) {
        color = event.target.style.backgroundColor;
    });
}

for (fill_block of fill_blocks) {
    fill_block.addEventListener("mousedown", function (event) {
        if (color != null) event.target.style.backgroundColor = color;
    });
    fill_block.addEventListener("mouseover", function (event) {
        if (mousedown && color != null) event.target.style.backgroundColor = color;
    });
}