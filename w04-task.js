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
    hobbies: 
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
        places: "Kaplan, LA",
        length: "3 years"
    },
    {
        places: "Baton Rouge, LA",
        length: "10 years"
    }, 
    {
        places:"Rexburg, ID",
        length: "2 years"
    },
    {
        places: "Richmond, Va",
        length: "5 years"
    },
    {
        places: "Sandy River, Va", 
        length: "5 years"
    }
]

myProfile.placesLived.forEach((placesLived) => {
    let placesLivedPlace = document.createElement('dt' );
    placesLivedPlace.textcontent = placesLived.place;

    document.querySelector('#places-lived').appendChild(placesLivedPlace);

    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placesLived.length; 

    document.querySelector('#places-lived').appendChild(placesLivedPlace); 
    document.querySelector('#places-lived').appendChild(placesLivedLength);

})