const container = document.getElementById('container'); //get container element
const paragraph = document.createElement('p'); //Create p tag for results
const paragraph2 = document.createElement('p'); //Create p tag for results
container.appendChild(paragraph); //Make p tag child of container
container.appendChild(paragraph2); //Make p tag child of container

//Closure function
function closure(name, ssn) {
    class PII {
        //private field for ssn
        #ssn;
        //Constructor to make new objects
        constructor(name, ssn) {
            //set name
            this.name = name;
            //set ssn
            this.#ssn = ssn;
        }
        //Getter function for name
        getName() {
            return this.name;
        }
    }

    const patient2 = new PII(name, ssn);
    // Output: Undefined
    console.log(patient2.name); 
    // Output: Undefined
    console.log(patient2.ssn); 
    // Output: John
    console.log(patient2.getName());

    paragraph.innerHTML = `Name: ${patient2.getName()}`;
    paragraph2.innerHTML = `SSN: ${patient2.ssn} (private)`;
}

function form() {
    event.preventDefault()
    const name = document.forms["info"]["name"].value;
    const ssn = document.forms["info"]["ssn"].value;
    closure(name, ssn);
}