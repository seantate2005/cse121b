/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Sean Tate';

const currentYear = '2024';

const profilePicture = "images/profile.png"

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML= `<strong>${fullName}</strong>`
yearElement.textcontent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('constalt', `This is ${fullName}, a student at BYU-Idaho`);



/* Step 5 - Array */

let favfoods = ["Cajun", "Italian", "Mexican", "Burgers", "Pancakes", "Steak and Potatoes"]

foodElement.innerHTML = favfoods;
let newfood = 'biscuits and gravy';
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.shift(favfoods);
foodElement.innerHTML += `<br>${favfoods}`;
favfoods.pop(favfoods);
foodElement.innerHTML += `<br>${favfoods}`;

