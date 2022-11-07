//navbarfix
window.onscroll = function () {
  const header = document.querySelector("header");
  const portof = document.querySelector("#portofolio");
  const fixedNav = header.offsetTop;
  const fixedNav2 = portof.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }

  if (window.pageYOffset > fixedNav2) {
    header.classList.add("navbar-fixed2");
  } else {
    header.classList.remove("navbar-fixed2");
  }
};

//button hamburger
const btnhum = document.querySelector("#btnhum");
const navMenu = document.querySelector("#nav-menu");
btnhum.addEventListener("click", function () {
  btnhum.classList.toggle("btnhum-active");
  navMenu.classList.toggle("hidden");
});
