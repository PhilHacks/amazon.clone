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

//Ny implemention med vanilla.js
const selectElement = document.getElementById("kategorier-select");

const updateDropdownWidth = (selectElement) => {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const selectedText = selectedOption.textContent.trim();

  const tempSpan = document.createElement("span");
  // tempSpan.style.visibility = 'hidden';
  // tempSpan.style.whiteSpace = 'nowrap';
  tempSpan.textContent = selectedText;
  document.body.appendChild(tempSpan);
  console.log("AppendChild");
  console.log("tempSpan", tempSpan);

  const textWidth = tempSpan.clientWidth;
  document.body.removeChild(tempSpan);
  // const textWidth = selectedOption.clientWidth; // selectedOption.text.length * 10; // Justera konstanten för att passa din design
  console.log("Bredd", textWidth);
  selectElement.style.width = textWidth + "px";
};

selectElement.addEventListener("change", () =>
  updateDropdownWidth(selectElement)
);
document.addEventListener("DOMContentLoaded", () =>
  updateDropdownWidth(selectElement)
);
// window.addEventListener("load", updateDropdownWidth);
