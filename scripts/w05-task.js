const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let templeList = []

templesElement = document.getElementById('temples');
const displayTemples = async (temples) => {
    temples.forEach(temple => { 
    let templeElement = document.createElement('div'); 
    document.templesElement.textContent=temple.name; 
    stats.appendChild(templeElement);
});

    let stats= document.createElement("div"); 
      let h3 = document.createElement('h3');
      h3.textContent = temples.templeName
      stats.appendChild(h3);
  
      let img = document.createElement('img');
      imageElement.setAttribute ('src', imageUrl);
      imageElement.setAttribute('alt',location);
      img.textContent = temples;
      stats.appendChild(img);
  
    };

  
  /* async getTemples Function using fetch()*/
  function results(templeList) {
    results = templeList;
    console.log("first: ", results);
  }

  const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    const templeList = await response.json();
    (templeList);
  }
  
  getTemples();
  console.log("second: ", results);
  /* reset Function */
  function reset (){
    stats.appendChild(article);
  }
  
  /* filterTemples Function */
  function filterTemples(temples){
    reset(temples);
    let filter = document.querySelector('#filtered').value;
    switch (filter) {
      case 4:
       
        break;
   
      default:
        break;
    }
    displayTemples.filter.forEach(temples =>{
      let Utah = temples.filter(location);
      document.querySelector('utah').textContent = Utah.join(', ');
      let notUtah = temples.filter(location);
      document.querySelector('notutah').textContent = notUtah.join(', ');
      let older = temples.filter(Date(1950));
      document.querySelector('older').textContent = older.split(', ');
      document.querySelector('all').textContent;
    })
  }
  
  
  
  /* Event Listener */
  document.querySelector('#filtered').addEventListener('change', () => {filterTemples(templeList)});
  
  getTemples();