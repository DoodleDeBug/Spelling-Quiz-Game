// const spelling = (() { //initialize iffe

//variables

let week = 1;
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
    10: "Carrot",
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
    10: "Whole",
  },
];

// cache DOM
const container = document.getElementById("container");
const form = document.querySelector("form");
const spellingList = document.querySelectorAll("input");

//add event listeners
form.addEventListener("submit", addSpellings);

render();

function render() {
  spellings.forEach((week) => {
    console.log(`Week ${spellings.indexOf(week) + 1}`);
  });
}

function addSpellings(e) {
  e.preventDefault(); // prevent refresh of page on form submit

  let i = 1; // start week counter off

  window["week" + week] = {}; // empty object for variable week name

  spellingList.forEach((spelling) => {
    window["week" + week][i] = spelling.value;
    i++;
  });

  console.log(window["week" + week]);
  spellings.push(window["week" + week]); //push week object to spelling array

  console.log(spellings);
  clearForm();
  week++;
}

function clearForm() {
  spellingList.forEach((spelling) => (spelling.value = ""));
}

// })
