const url = "recipes/w05-task.json";
let recipeList = []

const recipes = document.getElementById('recipes');
const displayRecipes = async (recipes2) => {
    recipes2.forEach(recipe => { 
    let recipeElement = document.createElement('article');
    let recipeName = document.createElement("h3"); 
    recipeName.textContent=temple.templeName 
    let img = document.createElement('img');
    img.setAttribute('src', recipe.imageUrl);
    img.setAttribute('alt', recipeName.location);
    templeElement.appendChild(recipeName);
    templeElement.appendChild(img);
    recipes.appendChild(recipeElement);
    
})};
  
  /* async getTemples Function using fetch()*/

  const getRecipes = async () => {
    const response = await fetch('recipes/w05-task.json');
    recipeList = await response.json();
    displayTemples(recipeList);
    console.log(recipeList);
  }
  
  /* reset Function */
  function reset(){
    recipes.innerHTML=[]; 
  }
  
  /* filterTemples Function */
  function filterRecipes(recipes){
    reset();
    let filter = document.querySelector('#filtered').value;
    switch(filter){
      case "Appetizer":
        displayRecipes(recipes.filter (recipe => recipe.mealPart.includes("appetizer")))
        break
      case "Entree":
        displayRecipes(recipes.filter(recipe => recipe.mealPart.includes("entree")))
        break
      case "Dessert":
        displayRecipes((recipes.filter(recipe => recipes.mealPart.includes("dessert")))) 
        break
      case "all":
        displayRecipes(recipes)
        break
 
    
    
    }}
  

  
  
  /* Event Listener */
  document.querySelector('#filtered').addEventListener('change', () => {filterRecipes(recipeList)});
  
  getRecipes();