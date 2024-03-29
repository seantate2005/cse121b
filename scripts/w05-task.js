/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("");
var templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {

}

const output = (temples) => {
    let article = document.createElement("article"); 
    let templeName = document.createElement("h3")
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageURL);
    img.setAttribute{"alt", temple.templeName};

    templesElement.appendChild(templeName);
    templesElement.appendChild(img); 
    templesElement.appendChild(article);
    document.querySelector("#temples").appendChild(article);
}

/* async getTemples Function using fetch()*/

const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    output(templeList);
};

console.log(templeList)
getTemples();
/* reset Function */


/* filterTemples Function */



/* Event Listener */
