const test = (() => {
  // cache DOM
  const speakerBtn = document.querySelector(".speaker");
  const answerField = document.getElementById("answer");
  const weekDisplay = document.querySelector(".week");
  const qNumDisplay = document.querySelector(".qNum");

  // get weekNum and spellings array
  let weekNum = localStorage.getItem("currentTestWeek");
  let spellings = localStorage.getItem("currentTestSpellings").split(",");

  console.log(weekNum);
  console.log(spellings);

  //variables
  let qNum = 1;

  // add event listeners
  //   speakerBtn.addEventListener("click", speak);
  //   answerField.addEventListener("submit", processAnswer);

  // display
  weekDisplay.innerText = `Week ${weekNum}`;
  qNumDisplay.innerText = `Q${qNum}.`;
})();
