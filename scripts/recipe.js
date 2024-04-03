const url = "https://github.com/seantate2005/cse121b/blob/main/recipes/recipes.json";
let recipeList = []

const recipes = document.getElementById('recipes');
const displayRecipes = async (recipes2) => {
    recipes2.forEach(recipe => { 
    let recipeElement = document.createElement('article');
    let recipeName = document.createElement("h3"); 
    recipeName.textContent=recipes.recipeName 
    let img = document.createElement('img');
    img.setAttribute('src', recipe.imageUrl);
    img.setAttribute('alt', recipeName.mealPart);
    recipeElement.appendChild(recipeName);
    recipeElement.appendChild(img);
    recipes.appendChild(recipeElement);
    
})};
  

    const getRecipes = async () => {
    const response = await fetch('recipes/w05-task.json');
    recipeList = await response.json();
    displayRecipes(recipeList);
    console.log(recipeList);
  }
  
  function reset(){
    recipes.innerHTML=[]; 
  }
  
  function filterRecipes(recipes){
    reset();
    let filter = document.querySelector('#filtered').value;
    switch(filter){
      case "appetizer":
        displayRecipes(recipes.filter (recipe => recipe.mealPart.includes("appetizer")))
        break
      case "entree":
        displayRecipes(recipes.filter(recipe => recipe.mealPart.includes("entree")))
        break
      case "dessert":
        displayRecipes((recipes.filter(recipe => recipes.mealPart.includes("dessert")))) 
        break
      case "all":
        displayRecipes(recipes)
        break
      case "cost":
        displayRecipes((recipes.filter(recipe => recipe.cost.includes(">$20"))))
      break 
      case "cheap":
        displayRecipes((recipes.filter(recipe => recipe.cost.includes(""))));
      
    
    }}
  

  
  
  /* Event Listener */
  document.querySelector('#filtered').addEventListener('change', () => {filterRecipes(recipeList)});
  
  getRecipes();