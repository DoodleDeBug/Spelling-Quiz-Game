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
    let index = spellings.indexOf(week);
    console.log(index);

    const div1 = document.createElement("div");
    div1.classList.add("col-8", "col-lg-4", "col-xl-3");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "text-center", "py-4");

    const title = document.createElement("h4");
    title.classList.add("card-title");
    title.innerText = `Week ${spellings.indexOf(week) + 1}`;

    const list = document.createElement("p");
    list.classList.add("card-text");
    list.innerText = spellings[index];
    console.log({ spelling: spellings[index] });

    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.classList.add("btn", "btn-outline-primary", "btn-lg", "mt-3");
    link.innerText = "Start Test";

    container.appendChild(div1);
    div1.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(list);
    cardBody.appendChild(link);
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
