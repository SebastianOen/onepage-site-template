const firstBtn = document.querySelector("#first");
const secondBtn = document.querySelector("#second");
const thirdBtn = document.querySelector("#third");
const fourthBtn = document.querySelector("#fourth");
const fithBtn = document.querySelector("#fith");
const sixthBtn = document.querySelector("#sixth");
const backBtns = document.querySelectorAll(".back");

const firstPage = document.querySelector(".first-content");
const secondPage = document.querySelector(".second-content");
const thirdPage = document.querySelector(".third-content");
const fourthPage = document.querySelector(".fourth-content");
const fithPage = document.querySelector(".fith-content");
const sixthPage = document.querySelector(".sixth-content");

firstBtn.addEventListener("click", () => {
  firstPage.classList.remove("reverse");
  firstPage.classList.add("appear");
});

secondBtn.addEventListener("click", () => {
  secondPage.classList.remove("reverse");
  secondPage.classList.add("appear");
});

thirdBtn.addEventListener("click", () => {
  thirdPage.classList.remove("reverse");
  thirdPage.classList.add("appear");
});

fourthBtn.addEventListener("click", () => {
  fourthPage.classList.remove("reverse");
  fourthPage.classList.add("appear");
});

fithBtn.addEventListener("click", () => {
  fithPage.classList.remove("reverse");
  fithPage.classList.add("appear");
});

sixthBtn.addEventListener("click", () => {
  sixthPage.classList.remove("reverse");
  sixthPage.classList.add("appear");
});

for (let i = 0; i < backBtns.length; i++) {
  const backBtn = backBtns[i];

  backBtn.addEventListener("click", () => {
    firstPage.classList.remove("appear");
    firstPage.classList.add("reverse");
    secondPage.classList.remove("appear");
    secondPage.classList.add("reverse");
    thirdPage.classList.remove("appear");
    thirdPage.classList.add("reverse");
    fourthPage.classList.remove("appear");
    fourthPage.classList.add("reverse");
    fithPage.classList.remove("appear");
    fithPage.classList.add("reverse");
    sixthPage.classList.remove("appear");
    sixthPage.classList.add("reverse");
  });
}
