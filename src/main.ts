import "./style.css";
import "./components/title.css";
import "./components/button.css";
import "./components/hero.css";

const menuButton = document.querySelector("#menu-button") as HTMLElement;

const menuNav = document.querySelector("#menu-nav") as HTMLElement;

menuButton?.addEventListener("click", function () {
  menuNav.classList.toggle("show");
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    menuNav.classList.remove("show");
  }
});
