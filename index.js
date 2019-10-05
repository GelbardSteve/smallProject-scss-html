const hamMenu = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-menu-close");
const logoNavImg = document.querySelector(".logo-nav-img");

hamMenu.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-close");
});

(function() {
  logoNavImg.style.transform = "rotate(360deg)";
  logoNavImg.style.transition = "all 1s";
})();
