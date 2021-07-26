const test = (() => {
  // cache DOM
  const speakerBtn = document.querySelector(".speaker");
  const form = document.querySelector("#form");
  const answerField = document.querySelector("#answer");
  const weekDisplay = document.querySelector(".week");
  const qNumDisplay = document.querySelector(".qNum");

  // get weekNum and spellings array
  let weekNum = localStorage.getItem("currentTestWeek");
  let spellings = localStorage.getItem("currentTestSpellings").split(",");

  //format spellings
  let formattedSpellings = [];
  spellings.forEach((word) => formattedSpellings.push(word.toLowerCase()));
  localStorage.setItem("currentSpellings", formattedSpellings);

  //variables
  let qNum = 0;
  let answers = [];

  // add event listeners
  form.addEventListener("submit", newTurn);
  speakerBtn.addEventListener("click", speak);

  // display
  weekDisplay.innerText = `Week ${weekNum}`;

  newTurn();

  ////FUNCTIONS////////////////////////////////////////////////////////////

  function newTurn(e) {
    if (e) {
      e.preventDefault();
    }

    answers.push(answerField.value.toLowerCase());
    answerField.value = "";
    console.log(answers.slice(1));

    if (qNum == 10) {
      alert("game over");
      let results = answers.slice(1);
      //process answers
      mark(results);

      // switch to results page
      window.location = "./results.html";
    } else {
      qNum++;
      qNumDisplay.innerText = `Q${qNum}.`;
      speak();
    }
  }

  function mark(results) {
    let markedAnswers = [];
    let status;
    for (let i = 0; i < results.length; i++) {
      results[i] === formattedSpellings[i]
        ? (status = "correct")
        : (status = "incorrect");
      markedAnswers.push([results[i], status]);
    }
    console.table(markedAnswers);
    localStorage.setItem("markedAnswers", JSON.stringify(markedAnswers));
  }
  function speak() {
    let spelling = new SpeechSynthesisUtterance();
    spelling.text = spellings[qNum - 1];
    window.speechSynthesis.speak(spelling);

    toggleSound();
    setTimeout(toggleSound, 1000);
  }

  function toggleSound() {
    speakerBtn.firstChild.classList.toggle("bi-volume-up-fill");
  }
})();
