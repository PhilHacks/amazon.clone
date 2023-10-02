const buttonLabel = document.querySelector(".button-label");
const selectElement = document.querySelector(".select");

// När sidan laddas körs den här. Har för enkelhetens skull hårdkodat första valet.
// Detta sätts alltså i den snygga "knappens" label-span. textContent här är ett
// säkrare alternativ till innerHTML som också kan användas för att byta innehåll.
// textContent slägger dock bara igenom text och är svårara att "hacka" med fult innehåll.
// buttonLabel.textContent = "Alla kategorier...";

buttonLabel.textContent = selectElement.options[0].textContent + ' ⯆';

// En eventlyssnare sätts här på select-elementet och lyssnar på förändringar (change).
// När selecten byter värde så triggas funktionen där som tar in ett sk. event för ändringen.
// Eventet innehåller massa information, men bl.a. det nya värdet (event.target.value) för select
// som vi använder för att sätta ett nytt textContent på button labeln.
selectElement.addEventListener("change", (event) => {
  const selectedIndex = event.target.selectedIndex;
  const selectedOption = event.target.options[selectedIndex];
  const optionText = selectedOption.textContent;
  buttonLabel.textContent = optionText + ' ⯆';
});

//rad att hämtar från select (value)
//select visas som första alternativ

//kod snut som vi kan återanvända


// ----------- Side menu ------------


const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const openSideMenuButton = document.getElementById('side-menu-button');
let sideMenuOpen = false;

openSideMenuButton.addEventListener('click', (event)=>{
  event.stopPropagation();
  sideMenu.style.left = 0;
  overlay.style.display = 'block';
  sideMenuOpen = true;
});





//TODO - Fixa så menyn försvinner igen!
function handleClickOutsideSideMenu(event){
  if(sideMenuOpen){
    if(event.target !== sideMenu && !sideMenu.contains(event.target)){
      sideMenu.style.left = '-350px';
      overlay.style.display = 'none';
      sideMenuOpen = false;
    }
  }
}


document.addEventListener('click', handleClickOutsideSideMenu);
