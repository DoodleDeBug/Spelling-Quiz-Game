const test = (() => {
  //get local storage stuff
  const spellings = localStorage.getItem("currentSpellings");
  const markedAns = JSON.parse(localStorage.getItem("markedAnswers"));

  console.table(spellings);
  console.table(markedAns);

  //cacheDOM
  const firstCol = document.querySelector(".first");
  const secondCol = document.querySelector(".second");
})();
