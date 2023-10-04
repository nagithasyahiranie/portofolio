/* ========================= toggle style switcher ========================= */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Sembunyikan style-switcher saat melakukan scroll
window.addEventListener("scroll", () => {
  const styleSwitcher = document.querySelector(".style-switcher");
  if (styleSwitcher.classList.contains("open")) {
    styleSwitcher.classList.remove("open");
  }
});

/* ========================= theme colors ========================= */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/* ========================= theme light and dark mode ========================= */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  const icon = dayNight.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  const icon = dayNight.querySelector("i");
  if (document.body.classList.contains("dark")) {
    icon.classList.add("fa-sun");
  } else {
    icon.classList.add("fa-moon");
  }
});
