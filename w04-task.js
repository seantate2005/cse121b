/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Sean Tate",
    photo: {
        src: "images/profile.png",
        alt: "Sean Tate Profile Picture"
    }, 
    favoriteFoods: 
        [
            "Cajun", 
            "Chinese", 
            "Mexican",
            "Italian",
            "Desserts", 
            "Pie"
        ],
    hobbis: 
        [
        "Cooking",
        "Singing",
        "Coding",
        "Piano"
    ],
    placesLived: [],

};



/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src; 
document.querySelector('#photo').alt = myProfile.photo.alt; 

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
}); 

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived = [
    {
        place: "Kaplan, LA", 
        length: "3 years"
    },

    {
        place: "Baton Rouge, LA", 
        length: "10 years"
    }, 

    {
        place:"Rexburg, ID", 
        length: "2 years"
    },

    {
        place: "Richmond, Va",
        length: "5 years"
    },

    {
        place: "Sandy River, Va",
        length: "5 years"
    }
]

myProfile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place; 
     
    let placesLivedLength = document.createElement('dd')
    placesLivedLength.textContent = placeLived.length
   
    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector("#places-lived").appendChild(placesLivedLength);
})