// const spelling = (() {
let spellings = [
  {
    1: "Dog",
    2: "Button",
    3: "Button",
    4: "Button",
    5: "Button",
    6: "Button",
    7: "Button",
    8: "Button",
    9: "Button",
    10: "Button",
  },
  {
    1: "Dog",
    2: "Button",
    3: "Button",
    4: "Button",
    5: "Button",
    6: "Button",
    7: "Button",
    8: "Button",
    9: "Button",
    10: "Button",
  },
];

// cache DOM
const container = document.getElementById("container");
const form = document.querySelector("form");

//add event listeners

form.addEventListener("submit", thing);

function thing(e) {
  e.preventDefault();
  console.log("things");
}
// })
