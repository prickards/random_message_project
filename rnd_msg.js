//An array of character from which one will be randomly selected to insult the user.
const insultor = [{name: 'Jim Halpert', job: 'Sales man', insult: 'lazy'}, 
    {name: 'Dwight Schroot', job: 'Sales man', insult: 'weak'},
    {name: 'Kevin Malone', job: 'Accountant', insult: 'dumb'},
    {name: 'Michael Scott', job: 'The boss', insult: 'not funny'},
    {name: 'Pam Beasly', job: 'Receptionist', insult: 'too nice'},
    {name: 'Toby Flenderson', job: 'HR rep', insult: 'rebelious'},
    {name: 'Kelly Kapoor', job: 'Customer services', insult: 'too chatty'},
    {name: 'Creed Braton', job: 'Qaulity control', insult: 'creepy'},
    {name: 'Ryan Howard', job: 'Intern', insult: 'protentious'},
    {name: 'Mose', job: 'Beet farmer', insult: 'beetless'}
]

const theInsult = name => {
    
//variables to be used in switch statement and final outputted message. 
    let rndNum = Math.floor(Math.random() * 10); 
    let character = insultor[rndNum].name
    let insultSelect = insultor[rndNum].insult
    let animal = "Sloth"

//this switch statement will randomly assign the user an animal to be used later in the outputted message. 
    switch (rndNum) {
        case 0: 
        animal = "sloth"; 
        break; 
        case 1: 
        animal = "mouse"; 
        break; 
        case 2: 
        animal = "pig"
        break;
        case 3: 
        animal = "toby" 
        break; 
        case 4: 
        animal = "quaker"; 
        break; 
        case 5: 
        animal = "cat"
        break; 
        case 6: 
        animal = "bird"; 
        break; 
        case 7:
        animal = "naked mole rat"; 
        break; 
        case 8: 
        animal = "turtle"
        break;
        case 9:
        animal = "horse"; 
        break; 
        default: 
        animal = "sloth"; 
        break; 
    }

    console.log(`Hi ${name}, I have been speaking to ${character} and we both think that your are ${insultSelect} just like a ${animal}`); 
}

theInsult('Charles'); 
theInsult('Amy');
theInsult('Terry');
theInsult('Holt');
theInsult('Jake');
