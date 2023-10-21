// ----------- Dropdown Button Label Update ------------
const buttonLabel = document.querySelector(".button-label");
const selectElement = document.querySelector(".select");

buttonLabel.textContent = selectElement.options[0].textContent + " ⯆";

selectElement.addEventListener("change", (event) => {
  const selectedIndex = event.target.selectedIndex;
  const selectedOption = event.target.options[selectedIndex];
  const optionText = selectedOption.textContent;
  buttonLabel.textContent = optionText + " ⯆";
});

// ----------- Side menu toggle ------------
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");
const openSideMenuButton = document.getElementById("side-menu-button");
let sideMenuOpen = false;

openSideMenuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  sideMenu.style.left = 0;
  overlay.style.display = "block";
  sideMenuOpen = true;
});

function handleClickOutsideSideMenu(event) {
  if (sideMenuOpen) {
    if (event.target !== sideMenu && !sideMenu.contains(event.target)) {
      sideMenu.style.left = "-350px";
      overlay.style.display = "none";
      sideMenuOpen = false;
    }
  }
}

document.addEventListener("click", handleClickOutsideSideMenu);

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

// ----------- scrollToTop Function ------------
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const backButton = document.querySelector(".back-to-top-button");

if (backButton) {
  backButton.addEventListener("click", scrollToTop);
}
