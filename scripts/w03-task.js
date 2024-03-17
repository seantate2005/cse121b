/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (add1, add2) {
    return add1 + add2;
}

function addNumbers() {
        let addNumber1 = Number(document.querySelector('#add1').value);
        let addNumber2 = Number(document.querySelector('#add2').value);
        document.querySelector('#sum').value = add(addNumber1, addNumber2);
        
    }
document.querySelector(`#addNumbers`).addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */

function subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
}

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1*factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById("factor1").value);
    let factor2 = Number(document.getElementById("factor2").value);
    let product = (factor1*factor2); 
    document.getElementById("product").value = product; 
}
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (x, y) => x/y; 

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */
//input


function getTotal() {
    let subtotal = parseFloat(document.getElementById("subtotal").value)
    if (document.getElementById("member").checked) {
        subtotal = subtotal - subtotal * 0.2;
    }   document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", getTotal);
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector('#array').innerHTML = array.filter(array => array)

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = array.filter(array => array % 2 === 1)

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = array.filter(array => array % 2 === 0)
 
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = array.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = array.map((number => number * 2))

/* Output Sum of Multiplied by 2 Array */


