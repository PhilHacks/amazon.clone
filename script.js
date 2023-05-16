import Choices from "choices.js";
// import 'choices.js'
import 'choices.js/public/assets/styles/choices.css';

document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.getElementById("kategorier-select");
    new Choices(selectElement);
  });