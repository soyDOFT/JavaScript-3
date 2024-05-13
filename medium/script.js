


const btn = document.getElementById('btn'); //Get the button element
btn.addEventListener('click', sharePizza); //Listen for when button is clicked

const container = document.getElementById('container'); //get container element
const paragraph = document.createElement('p'); //Create p tag for results
container.appendChild(paragraph); //Make p tag child of container

function sharePizza() {
    //prompt the user for the amount of slices
    let slicesAmount = prompt('How many slices of pizza are there?');
    //Data validation for a valid and positive number
    console.log(slicesAmount);
    while (isNaN(slicesAmount) || slicesAmount < 0) {
        slicesAmount = prompt('Error: write a valid number.\nHow many slices of pizza are there?');
    }
    //prompt the user for the amount of people
    let peopleAmount = prompt('How many people are there to share with?');
    //Data validation for a valid and positive number
    while (isNaN(peopleAmount) || peopleAmount < 0) {
        peopleAmount = prompt('Error: write a valid number.\nHow many people are there to share with?');
    }

    //Call function with user input to show how many slices each person gets
    const result = sharePizza(slicesAmount, peopleAmount);
    console.log(result);
    paragraph.innerHTML = result; //Add text to p tag

    function sharePizza(slices, people) {
        //Display how many slices each person gets
        const result = slices / people;
        return `Each person gets ${result.toFixed(2)} slices of pizza; from our ${slices} slice pizza`;
    }
}