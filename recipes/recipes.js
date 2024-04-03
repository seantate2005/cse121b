const url = "recipes.json";
let recipeList = []


const recipes = document.getElementById('recipes');
const displayrecipes = async (recipes2) => {
    recipes2.forEach(recipe => { 
	let cost=document.createElement("h2");
	cost.textContent=recipe.cost;
	let recipeElement = document.createElement('article');
    let recipeName = document.createElement("h1");
	recipeName.textContent=recipe.recipeName; 
	let meatType = document.createElement("p");
	meatType.textContent=recipe.meatType;
	let carb = document.createElement ("h4"); 
	carb.textContent = recipe.carb;
	let mealPart=document.createElement("h4");
	mealPart.textContent=recipe.mealPart; 
	let text=document.createElement("h1");
	document.innerhtml = "bon"

	
    let img = document.createElement('img');
    img.setAttribute('src', recipe.imageUrl);
    img.setAttribute('alt', recipe.recipeName);

	let address = `🦞Address: 214 Ambassador Cafery Dr., Lafayette, LA 🦞 Phone: 337-398-3289🦞`
	document.getElementById("address").innerHTML = address;
	document.getElementbyId 
	recipeElement.appendChild(recipeName);
	recipeElement.appendChild(cost);
	recipes.appendChild(recipeElement);
    recipeElement.appendChild(img);
	recipeElement.appendChild(meatType);
	recipeElement.appendChild(carb); 
	
	
    
})};
  
  /* async getRecipes Function using fetch()*/

  const getRecipes = async () => {
    const response = await fetch('recipes.json');
    recipeList = await response.json();
    displayrecipes(recipeList);
    console.log(recipeList);
  }
  
  /* reset Function */
  function reset(){
    recipes.innerHTML=[]; 
  }
  
  /* filter recipe*/
  function filterrecipes(recipes){
    reset();
    let filter = document.querySelector('#filtered').value;
    switch(filter){
      case "appetizer":
        displayrecipes(recipes.filter (recipe => recipe.mealPart.includes("Appetizer")))
        break
      case "entree":
        displayrecipes(recipes.filter(recipe => recipe.mealPart.includes("Entree")))
        break
      case "dessert":
		displayrecipes(recipes.filter(recipe => recipe.mealPart.includes("Dessert")))
		break
	  case "overtwenty":
		displayrecipes((recipes.filter(recipe => (recipe.cost) >= 20)))
        break
	  case "undertwenty": 
	  	displayrecipes((recipes.filter((recipes) => (recipes.cost) < 20)));
	break
      case "all":
        displayrecipes(recipes)
        break
    }}
 

  
  /* Event Listener */
  document.querySelector('#filtered').addEventListener('change', () => {filterrecipes(recipeList)});
  
 getRecipes();