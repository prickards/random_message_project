const insultor = [{name: 'Jim Halpert', job: 'sales man', insult: 'lazy'}, 
    {name: 'Dwight Schroot', job: 'sales man', insult: 'weak'},
    {name: 'Michael Scott', job: 'The boss', insult: 'not funny'},
    {name: 'Kevin Malone', job: 'Accountant', insult: 'Dumb'},
    {name: 'Pam Beasly', job: 'Receptionist', insult: 'Too nice'},
    {name: 'Toby Flenderson', job: 'HR rep', insult: 'Rule breaker'},
    {name: 'Kelly Kapoor', job: 'Customer services', insult: 'Too chatty'},
    {name: 'Creed Braton', job: 'Qaulity control', insult: 'Creepy'},
    {name: 'Ryan Howard', job: 'Intern', insult: 'protentious'},
    {name: 'Mose', job: 'Beet farmer', insult: 'Your have not beets'}
]

const theInsultor = name => {
    
//variables to be used in switch statement and final outputted message. 
    let rndIn = Math.floor(Math.random() * 10); 
    let insult = "fat"

//this switch statement will randomly assign the user an insult to be used later in the outputted message. 
    switch (rndIn) {
        case 1: 
        insult = "fat"; 
        break; 
        case 2: 
        insult = "ugly"; 
        break; 
        case 3: 
        insult = "lazy"
        break;
        case 4: 
        insult = "stupid" 
        break; 
        case 5: 
        insult = "crazy"; 
        break; 
        case 6: 
        insult = "smelly"
        break; 
        case 7: 
        insult = "angry"; 
        break; 
        case 8:
        insult = "weird"; 
        break; 
        case 9: 
        insult = "creepy"
        break;
        case 10:
        insult = "dumb"; 
        break; 
        default: 
        insult = "fat"; 
        break; 
    }

}
