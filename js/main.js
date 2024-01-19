const loader = document.querySelector(".loader-wrapper");
window.onload = function () {
  loader.classList.add("loader-hidden");
  setInterval(function () {
    loader.classList.add("loader-hidden");
  }),990;
};

const btn = document.querySelector(".header__hamburger-btn");
const nav = document.querySelector(".header__nav-mobile-wrapper");
const navMobile = document.querySelector(".header__nav-mobile");
const clouseBtn = document.querySelector(".header__hamburger-clouse-btn");

btn.addEventListener("click", function (e) {
  nav.classList.add("active");
});

clouseBtn.addEventListener("click", function (e) {
  nav.classList.remove("active");
});
