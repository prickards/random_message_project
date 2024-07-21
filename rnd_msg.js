const theInsultor = name => {
    
//variables to be used in switch statement and final outputted message. 
    let rndNum = Math.floor(Math.random() * 10); 
    let insult = "fat"

//this switch statement will randomly assign the user an insult to be used later in the outputted message. 
    switch (rndNum) {
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
