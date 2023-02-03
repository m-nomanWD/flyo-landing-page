const input = document.querySelector("input");
const btn = document.querySelector(".btn-form");
const error = document.querySelector(".error");
const light = document.querySelectorAll(".light");
const footer = document.querySelector("footer");
const form = document.querySelector(".form");
const circle = document.querySelector(".circle");
const nav = document.querySelector("nav");
const darkLogo = document.querySelector(".dark-logo");
const lightLogo = document.querySelector(".light-logo");
const toggle = document.querySelector(".toggle");

btn.addEventListener("click", () => {
  if (input.value == "") {
    error.classList.add("show-error");
    console.log(error);
  } else {
    error.classList.remove("show-error");
    alert("Valid Email");
  }
});
circle.addEventListener("click", () => {
  circle.classList.toggle("move");

  footer.classList.toggle("toggle-footer");
  form.classList.toggle("toggle-form");
  light.forEach(function (t) {
    t.classList.toggle("toggle-light");
  });
  nav.classList.toggle("nav");
  darkLogo.classList.toggle("show-logo");
  toggle.classList.toggle("toggle-background");
});
