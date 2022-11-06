//navbarfix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//button hamburger
const btnhum = document.querySelector("#btnhum");
const navMenu = document.querySelector("#nav-menu");
btnhum.addEventListener("click", function () {
  btnhum.classList.toggle("btnhum-active");
  navMenu.classList.toggle("hidden");
});
