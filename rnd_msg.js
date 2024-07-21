//An array of character from which one will be randomly selected to insult the user.
const insultor = [{name: 'Jim Halpert', job: 'Sales man', insult: 'lazy'}, 
    {name: 'Dwight Schroot', job: 'Sales man', insult: 'weak'},
    {name: 'Michael Scott', job: 'The boss', insult: 'not funny'},
    {name: 'Kevin Malone', job: 'Accountant', insult: 'dumb'},
    {name: 'Pam Beasly', job: 'Receptionist', insult: 'too nice'},
    {name: 'Toby Flenderson', job: 'HR rep', insult: 'rebelious'},
    {name: 'Kelly Kapoor', job: 'Customer services', insult: 'too chatty'},
    {name: 'Creed Braton', job: 'Qaulity control', insult: 'creepy'},
    {name: 'Ryan Howard', job: 'Intern', insult: 'protentious'},
    {name: 'Mose', job: 'Beet farmer', insult: 'your have not beets'}
]

const theInsult = name => {
    
//variables to be used in switch statement and final outputted message. 
    let rndNum = Math.floor(Math.random() * 10); 
    let character = insultor[rndNum][0]
    let animal = "Sloth"

//this switch statement will randomly assign the user an insult to be used later in the outputted message. 
    switch (rndNum) {
        case 1: 
        animal = "sloth"; 
        break; 
        case 2: 
        animal = "mouse"; 
        break; 
        case 3: 
        animal = "toby"
        break;
        case 4: 
        insult = "pig" 
        break; 
        case 5: 
        insult = "quaker"; 
        break; 
        case 6: 
        insult = "cat"
        break; 
        case 7: 
        insult = "bird"; 
        break; 
        case 8:
        insult = "naked mole rat"; 
        break; 
        case 9: 
        insult = "turtle"
        break;
        case 10:
        insult = "horse"; 
        break; 
        default: 
        insult = "sloth"; 
        break; 
    }

    console.log(`Hi ${name}, I have been speaking to ${character} and we both think that your are ${insult} just like an ${animal}`); 
}

theInsult('Pete'); 

