const exerciseBtn = document.getElementById('btn'); //Get the button element
exerciseBtn.addEventListener('click', exercise); //Listen for when button is clicked

const container = document.getElementById('container'); //get container element
const paragraph = document.createElement('p'); //Create p tag for results
container.appendChild(paragraph); //Make p tag child of container

//closure function
function exercise() {
    console.log('HERE');
    //Variable outside of inner function
    const exerciseOfTheDay = prompt("Today's exercise");
    //Function to log the exercise
    function printExercise() {
        console.log('HERE2');
         //Append to container
        paragraph.innerHTML = `Today's exercise: ${exerciseOfTheDay}`; //Add text to p tag
        console.log("Today's exercise: " + exerciseOfTheDay);

    }

    printExercise();
}