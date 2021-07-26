const test = (() => {
  //get local storage stuff
  const spellings = localStorage.getItem("currentSpellings").split(",");
  const markedAns = JSON.parse(localStorage.getItem("markedAnswers"));

  //cacheDOM
  const firstCol = document.querySelector(".first");
  const secondCol = document.querySelector(".second");
  //variables

  let qNum = 1;

  render();

  function render() {
    markedAns.forEach((ans) => {
      const div = document.createElement("div");
      const q = document.createElement("span");
      q.innerText = `Q${qNum}. `;
      qNum++;
      const word = document.createElement("span");
      word.innerText = ans[0];
      const mark = document.createElement("img");

      div.appendChild(q);
      div.appendChild(word);
      div.appendChild(mark);

      if (ans[1] == "correct") {
        mark.setAttribute("src", "./tick.png");
        mark.setAttribute("alt", "tick");
      } else {
        mark.setAttribute("src", "./cross.png");
        mark.setAttribute("alt", "cross");

        const correctSpelling = document.createElement("p");
        correctSpelling.innerText = `Correct answer: ${
          spellings[markedAns.indexOf(ans)]
        }`;
        div.appendChild(correctSpelling);
      }
      qNum < 7 ? firstCol.appendChild(div) : secondCol.appendChild(div);
    });
  }
})();
