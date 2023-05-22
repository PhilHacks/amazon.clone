// import Choices from "choices.js";
// // import 'choices.js'
// import "choices.js/public/assets/styles/choices.css";

// // document.addEventListener("DOMContentLoaded", function () {
// //     var selectElement = document.getElementById("kategorier-select");
// //     new Choices(selectElement);
// //   });

// const myDropdown = new Choices(kategorier - select, {
//   shouldSort: false, // Inaktivera standardsorteringen
//   callbackOnCreateTemplates: function (template) {
//     return {
//       choice: (classNames, data) => {
//         return template(`
//           <div class="${classNames.item} ${classNames.itemSelectable}" data-item data-id="${data.id}" data-value="${data.value}" style="width: auto;">
//             ${data.label}
//           </div>
//         `);
//       },
//     };
//   },
// });

const selectElement = document.getElementById("kategorier-select");

const updateDropdownWidth = () => {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const textWidth = selectedOption.text.length * 10; // Justera konstanten för att passa din design
  selectElement.style.width = textWidth + "px";
};

selectElement.addEventListener("change", updateDropdownWidth);
window.addEventListener("load", updateDropdownWidth);
