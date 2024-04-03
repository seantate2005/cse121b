const url = "recipes.json";
let recipeList = []

const recipes = document.getElementById('recipes');
const displayrecipes = async (recipes2) => {
    recipes2.forEach(recipe => { 
    let recipeElement = document.createElement('article');
    let recipeName = document.createElement("h1");
	recipeName.textContent=recipe.recipeName; 
	let meatType = document.createElement("p");
	meatType.textContent=recipe.meatType;
	let carb = document.createElement ("h4"); 
	carb.textContent = recipe.carb;
	let mealPart=document.createElement("h3");
	mealPart.textContent=recipe.mealPart; 
	let cost=document.createElement("h2");
	cost.textContent=recipe.cost;
	
    let img = document.createElement('img');
    img.setAttribute('src', recipe.imageUrl);
    img.setAttribute('alt', recipe.recipeName);
    recipeElement.appendChild(recipeName);
    recipeElement.appendChild(img);
	recipeElement.appendChild(meatType);
	recipeElement.appendChild(carb); 
	recipeElement.appendChild(mealPart);
	recipeElement.appendChild(cost);
	recipes.appendChild(recipeElement);
    
})};
  
  /* async getTemples Function using fetch()*/

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
  
  /* filterTemples Function */
  function filterrecipes(recipes){
    reset();
    let filter = document.querySelector('#filtered').value;
    switch(filter){
      case "appetizer":
        displayrecipes(recipes.filter (recipe => recipe.mealPart.includes("appetizer")))
        break
      case "entree":
        displayrecipes(recipes.filter(recipe => recipe.mealPart.includes("entree")))
        break
      case "dessert":
		displayrecipes(recipes.filter(recipe => recipe.mealPart.includes("dessert")))
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