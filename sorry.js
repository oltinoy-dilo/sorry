const startPage = document.querySelector("#startPage");
const noPage = document.querySelector("#noPage");
const letterPage = document.querySelector("#letterPage");
const lovePage = document.querySelector("#lovePage");

const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");
const backButton = document.querySelector("#backButton");
const forYouButton = document.querySelector("#forYouButton");
const backToLetterButton = document.querySelector("#backToLetterButton");

function showPage(pageToShow) {
  startPage.classList.add("hidden");
  noPage.classList.add("hidden");
  letterPage.classList.add("hidden");
  lovePage.classList.add("hidden");

  pageToShow.classList.remove("hidden");
}

yesButton.addEventListener("click", () => {
  showPage(letterPage);
});

noButton.addEventListener("click", () => {
  showPage(noPage);
});

backButton.addEventListener("click", () => {
  showPage(startPage);
});

forYouButton.addEventListener("click", () => {
  showPage(lovePage);
});

backToLetterButton.addEventListener("click", () => {
  showPage(letterPage);
});