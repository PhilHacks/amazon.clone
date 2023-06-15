const buttonLabel = document.querySelector(".button-label");
const selectElement = document.querySelector(".select");

// När sidan laddas körs den här. Har för enkelhetens skull hårdkodat första valet.
// Detta sätts alltså i den snygga "knappens" label-span. textContent här är ett
// säkrare alternativ till innerHTML som också kan användas för att byta innehåll.
// textContent slägger dock bara igenom text och är svårara att "hacka" med fult innehåll.
buttonLabel.textContent = "Alla kategorier...";

// En eventlyssnare sätts här på select-elementet och lyssnar på förändringar (change).
// När selecten byter värde så triggas funktionen där som tar in ett sk. event för ändringen.
// Eventet innehåller massa information, men bl.a. det nya värdet (event.target.value) för select
// som vi använder för att sätta ett nytt textContent på button labeln.
selectElement.addEventListener("change", (event) => {
  const selectedIndex = event.target.selectedIndex;
  const selectedOption = event.target.options[selectedIndex];
  const optionText = selectedOption.textContent;
  buttonLabel.textContent = optionText;
});
