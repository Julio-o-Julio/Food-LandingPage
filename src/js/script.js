const header = document.getElementById("header");
const btnMobile = document.getElementById("btnMobile");
const iconBtnMobile = btnMobile.querySelector("i");
const mobileMenu = document.getElementById("mobileMenu");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navItem");

initializationNavItems(0);

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

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY - header.offsetHeight;
  if (scrollPosition > 0) {
    header.classList.add(
      "bg-opacity-90",
      "bg-[#fff9ea]",
      "backdrop-blur",
      "shadow-md"
    );
  } else {
    header.classList.remove(
      "bg-opacity-90",
      "bg-[#fff9ea]",
      "backdrop-blur",
      "shadow-md"
    );
  }
  let activeSelectionIndex = 0;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - header.offsetHeight - 50;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      activeSelectionIndex = index;
      return;
    }
  });
  initializationNavItems(activeSelectionIndex);
});

function initializationNavItems(activeSelectionIndex) {
  navItems.forEach((item) => {
    item.classList.remove("text-gray-900", "border-b-4", "border-amber-400");
  });
  navItems[activeSelectionIndex].classList.add(
    "text-gray-900",
    "border-b-4",
    "border-amber-400"
  );
}

ScrollReveal().reveal("#cta", {
  origin: "left",
  duration: 1000,
  distance: "20%",
});
ScrollReveal().reveal(".dish", {
  origin: "left",
  duration: 2000,
  distance: "20%",
});
ScrollReveal().reveal("#testimonialsChef", {
  origin: "left",
  duration: 1500,
  distance: "20%",
});
ScrollReveal().reveal(".feedback", {
  origin: "right",
  duration: 1000,
  distance: "20%",
});
