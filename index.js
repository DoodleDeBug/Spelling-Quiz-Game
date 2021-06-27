const spelling = (() => {
  //initialize iffe

  // cache DOM
  const container = document.getElementById("container");
  const form = document.querySelector("form");
  const spellingInput = document.querySelectorAll("input");

  //add event listeners
  form.addEventListener("submit", addSpellings);

  const capitalize = ([firstLetter, ...restOfWord]) =>
    firstLetter.toUpperCase() + restOfWord.join("");

  restoreLocal();

  // local storage
  function restoreLocal() {
    spellings = JSON.parse(localStorage.getItem("spellings"));
    if (spellings === null) spellings = [];
    render();
  }

  function saveLocal() {
    localStorage.setItem("spellings", JSON.stringify(spellings));
  }

  function render() {
    spellings.forEach((week) => {
      let index = spellings.indexOf(week);
      // console.log(index);

      const div1 = document.createElement("div");
      div1.classList.add("col-sm-10", "col-md-6", "col-lg-4", "col-xl-3");

      const card = document.createElement("div");
      card.classList.add("card", "my-2");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "text-center", "py-4");

      const title = document.createElement("h4");
      title.classList.add("card-title", "text-primary", "display-6");
      title.innerText = `Week ${spellings.indexOf(week) + 1}`;

      const content = document.createElement("div");
      content.classList.add("card-text");

      const list = document.createElement("ul");
      list.classList.add("text-center", "p-2", "text-dark");

      spellings[index].forEach((spelling) => {
        let formattedSpelling = capitalize(spelling.toLowerCase());
        const li = document.createElement("li");
        li.innerText = formattedSpelling;
        list.appendChild(li);
      });

      const link = document.createElement("a");
      link.setAttribute("href", "#");
      link.classList.add("btn", "btn-outline-primary");
      link.innerText = "Start Test";

      container.appendChild(div1);
      div1.appendChild(card);
      card.appendChild(cardBody);
      cardBody.appendChild(title);
      cardBody.appendChild(content);
      content.appendChild(list);
      cardBody.appendChild(link);
    });
  }

  function addSpellings(e) {
    e.preventDefault(); // prevent refresh of page on form submit

    let week = []; // empty object for variable week name

    spellingInput.forEach((spelling) => {
      week.push(spelling.value);
    });

    spellings.push(week); //push week array to spelling array

    clearForm();
    clearDisplay();
    render();
    saveLocal();
  }

  function clearForm() {
    spellingInput.forEach((spelling) => (spelling.value = ""));
  }

  function clearDisplay() {
    while (container.firstChild) {
      // removes all the cards
      container.removeChild(container.lastChild);
    }
  }
})();
