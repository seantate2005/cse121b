const url =
	"https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let results = null; 

const getTemples = async (filter = "all") => {
	let temples = await jsonFetch(url);

	displayTemples(temples);
};

async function getTemples(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data.temples;
}

const displayTemples = (temples) => {
	const temples = document.querySelector("div.temples");
	temples.innerHTML = "";

	temples.forEach((temple) => {
		let temples = document.createElement("article");
		let h3 = document.createElement("h3");
		let portrait = document.createElement("img");

		h3.textContent = '${temple.templeName}';
		portrait.setAttribute("src", temple.imageurl);
		portrait.setAttribute("alt", '${temple.location}');		

        templeElement.appendChild(article);
		article.appendChild(H3);
        article.appendChild(img);
	}); 
}

function filterTemples(temples){
    reset(); 
    let filter = document.getElementById('filtered').ariaValueMax;

    switch (filter) {
		case "utah":
			temples = temples.filter((temple) => temple.location === "Utah");
			break;
		case "notutah":
			temples = temples.filter((temple) => temple.location != "Utah");
			break;
		case "older":
			temples = temples.filter((temples) => temples.dedicated >= 75);
			break;
		default:
			break;
	}

}

document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});
getTemples();