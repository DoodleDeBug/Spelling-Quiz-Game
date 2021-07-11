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

  //   console.log(weekNum);
  console.log(spellings);
  console.log(formattedSpellings);

  //variables
  let qNum = 0;
  let answers = [];

  // add event listeners
  form.addEventListener("submit", newTurn);

  // display
  weekDisplay.innerText = `Week ${weekNum}`;

  newTurn();

  ////FUNCTIONS////////////////////////////////////////////////////////////

  function newTurn(e) {
    if (e) {
      e.preventDefault();
    }

    if (qNum == 10) {
      alert("game over");
    }

    answers.push(answerField.value.toLowerCase());
    answerField.value = "";
    console.log(answers.slice(1));

    qNum++;
    qNumDisplay.innerText = `Q${qNum}.`;
    console.log(`turn ${qNum}`);

    // add event listeners
    speakerBtn.addEventListener("click", speak);
  }

  function speak() {
    toggleSound();
    setTimeout(toggleSound, 1000);

    let spelling = new SpeechSynthesisUtterance();
    spelling.text = spellings[qNum - 1];
    window.speechSynthesis.speak(spelling);
  }

  function toggleSound() {
    speakerBtn.firstChild.classList.toggle("bi-volume-up-fill");
  }
})();
