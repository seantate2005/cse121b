const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let templeList = []

const temples = document.getElementById('temples');
const displayTemples = async (temples2) => {
    temples2.forEach(temple => { 
    let templeElement = document.createElement('article');
    let templeName = document.createElement("h3"); 
    templeName.textContent=temple.templeName 
    let img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.location);
    templeElement.appendChild(templeName);
    templeElement.appendChild(img);
    temples.appendChild(templeElement);
    
})};
  
  /* async getTemples Function using fetch()*/

  const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    displayTemples(templeList);
    console.log(templeList);
  }
  
  /* reset Function */
  function reset(){
    temples.innerHTML=[]; 
  }
  
  /* filterTemples Function */
  function filterTemples(temples){
    reset();
    let filter = document.querySelector('#filtered').value;
    switch(filter){
      case "utah":
        displayTemples(temples.filter (temple => temple.location.includes("Utah")))
        break
      case "notutah":
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")))
        break
      case "older":
        displayTemples((temples.filter(temple => new Date(temple.dedicated) < new Date (1950, 0, 1))))
        break
      case "all":
        displayTemples(temples)
        break
 
    
    
    }}
  

  
  
  /* Event Listener */
  document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList)});
  
  getTemples();