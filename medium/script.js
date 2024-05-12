//prompt the user for the amount of slices and amount of people
let slicesAmount = prompt('How many slices of pizza are there?');
let peopleAmount = prompt('How many people are there to share with?');

//Data validation for a valid and positive number
while (isNaN(slicesAmount) || slicesAmount < 0) {
    slicesAmount = prompt('Error: write a valid number.\nHow many slices of pizza are there?');
}

while (isNaN(peopleAmount) || peopleAmount < 0) {
    peopleAmount = prompt('Error: write a valid number.\nHow many people are there to share with?');
}

//Call function with user input to show how many slices each person gets
sharePizza(slicesAmount, peopleAmount);

function sharePizza(slices, people) {
    //Display how many slices each person gets
    console.log(`Each person gets ${slices / people} slices of pizza; from our ${slices} slice pizza`);
}