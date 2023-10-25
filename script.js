// ----------- Dropdown Button Label Update ------------
const getSelectedOptionText = () => {
  const selectElement = document.querySelector(".select");
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  return selectedOption.textContent;
};

const updateButtonLabel = () => {
  const buttonLabel = document.querySelector(".button-label");
  const selectedOptionText = getSelectedOptionText();
  buttonLabel.textContent = selectedOptionText + " ⯆";
};

document.querySelector(".select").addEventListener("change", updateButtonLabel);

updateButtonLabel();

// ----------- Side menu toggle ------------
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");
const openSideMenuButton = document.getElementById("side-menu-button");
let sideMenuOpen = false;

const initializeSideMenuEvents = () => {
  openSideMenuButton.addEventListener("click", openMenu);
  document.addEventListener("click", closeMenu);
};

const openMenu = (event) => {
  event.stopPropagation();
  sideMenu.style.left = 0;
  overlay.style.display = "block";
  sideMenuOpen = true;
};

const closeMenu = (event) => {
  if (sideMenuOpen) {
    if (event.target !== sideMenu && !sideMenu.contains(event.target)) {
      sideMenu.style.left = "-350px";
      overlay.style.display = "none";
      sideMenuOpen = false;
    }
  }
};

document.addEventListener("DOMContentLoaded", initializeSideMenuEvents);

// ----------- Hidden menu toggle ------------
const showButton = document.getElementById("show");
const hideMenu = document.getElementById("hidden-menu");
let hiddenMenuShown = false;

showButton.addEventListener("click", (event) => {
  event.stopPropagation();
  if (hiddenMenuShown) {
    hideMenu.style.display = "none";
    showButton.textContent = "Visa alla";
    hiddenMenuShown = false;
  } else {
    hideMenu.style.display = "flex";
    showButton.textContent = "Visa färre";
    hiddenMenuShown = true;
  }
});

// ----------- scrollToTop ------------
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const initializeScrollToTop = () => {
  const backButton = document.querySelector(".back-to-top-button");

  if (backButton) {
    backButton.addEventListener("click", scrollToTop);
  } else {
    throw new Error("Back button not found.");
  }
};

initializeScrollToTop();
