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
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");
const openSideMenuButton = document.querySelector("#side-menu-button");

const initializeSideMenuEvents = () => {
  openSideMenuButton.addEventListener("click", openMenu);
  document.addEventListener("click", closeMenu);
};

const openMenu = (event) => {
  event.stopPropagation();
  sideMenu.style.left = 0;
  overlay.style.display = "block";
};

const closeMenu = (event) => {
  if (event.target !== sideMenu && !sideMenu.contains(event.target)) {
    sideMenu.style.left = "-350px";
    overlay.style.display = "none";
  }
};

// Ensures event listeners are initialized after document load.
document.addEventListener("DOMContentLoaded", initializeSideMenuEvents);

// ----------- Hidden menu toggle ------------
//const showButton = document.getElementById("show");
const showButton = document.querySelector(".show");
const hiddenMenuElement = document.querySelector(".hidden-menu");
let hiddenMenuShown = false;

const hideMenu = () => {
  hiddenMenuElement.style.display = "none";
  // showButton.textContent = "Visa alla";
  showButton.innerHTML = "Visa alla<i class='arrow down'></i>";
  hiddenMenuShown = false;
};

const showMenu = () => {
  hiddenMenuElement.style.display = "flex";
  // showButton.textContent = "Visa färre";
  showButton.innerHTML = 'Visa färre<i class="arrow up"></i>';
  hiddenMenuShown = true;
};

const initializeShowButton = () => {
  showButton.addEventListener("click", (event) => {
    event.stopPropagation();
    return hiddenMenuShown ? hideMenu() : showMenu();
  });
};
initializeShowButton();

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
