class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        const string = prompt('What do you want to say?');
        console.log(string);
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
    
}

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true; 
    }

    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

    offerNewTask() {
        if (busy) {
            console.log("Mark can't accept any new tasks right now");
        } else {
            console.log("Mark would love to take on a new responsibilty");
        }
    }

    learnLanguage(language) {
        this.languages.push(language);
    }

    listLanguages() {
        // for (let i = 0; i < this.languages.length; i++) {
        //     console.log(this.languages[i]);
        // }


        return this.languages.toString();
    }
    
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
