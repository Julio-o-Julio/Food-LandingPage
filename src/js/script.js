const btnMobile = document.getElementById("btnMobile");
const iconBtnMobile = btnMobile.querySelector("i");
const mobileMenu = document.getElementById("mobileMenu");

btnMobile.addEventListener("click", (event) => {
  if (mobileMenu.classList.contains("hidden")) {
    iconBtnMobile.classList.remove("fa-bars");
    iconBtnMobile.classList.add("fa-x");
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
  } else {
    iconBtnMobile.classList.remove("fa-x");
    iconBtnMobile.classList.add("fa-bars");
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
  }
});
