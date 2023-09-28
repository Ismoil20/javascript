const openBtn1 = document.querySelector(".plus1");
const openBtn2 = document.querySelector(".plus2");
const openBtn3 = document.querySelector(".plus3");

const closeBtn1 = document.querySelector(".minus1");
const closeBtn2 = document.querySelector(".minus2");
const closeBtn3 = document.querySelector(".minus3");

const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const text3 = document.querySelector(".text3");

openBtn1.addEventListener("click", () => {
  text1.style.display = "block";
  closeBtn1.style.display = "block";
  openBtn1.style.display = "none";
  text2.style.display = "none";
  text3.style.display = "none";
  openBtn2.style.display = "block";
  openBtn3.style.display = "block";
  closeBtn2.style.display = "none";
  closeBtn3.style.display = "none";
});

closeBtn1.addEventListener("click", () => {
  text1.style.display = "none";
  openBtn1.style.display = "block";
  closeBtn1.style.display = "none";
});

openBtn2.addEventListener("click", () => {
  text2.style.display = "block";
  closeBtn2.style.display = "block";
  openBtn2.style.display = "none";
  text1.style.display = "none";
  text3.style.display = "none";
  openBtn1.style.display = "block";
  openBtn3.style.display = "block";
  closeBtn1.style.display = "none";
  closeBtn3.style.display = "none";
});

closeBtn2.addEventListener("click", () => {
  text2.style.display = "none";
  openBtn2.style.display = "block";
  closeBtn2.style.display = "none";
});

openBtn3.addEventListener("click", () => {
  text3.style.display = "block";
  closeBtn3.style.display = "block";
  openBtn3.style.display = "none";
  text1.style.display = "none";
  text2.style.display = "none";
  openBtn1.style.display = "block";
  openBtn2.style.display = "block";
  closeBtn1.style.display = "none";
  closeBtn2.style.display = "none";
});

closeBtn3.addEventListener("click", () => {
  text3.style.display = "none";
  openBtn3.style.display = "block";
  closeBtn3.style.display = "none";
});
