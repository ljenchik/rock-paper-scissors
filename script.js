let choiceInput = ['r', 'p', 's'];

let userChoice = prompt('Choose r, p or s: ');
// if (userChoice !== 'r' || userChoice !== 'p' || userChoice !== 's') {
//     alert(userChoice);
//     prompt('Choose r, p or s: ');
// }

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

let computerChoice = getRandomItem(choiceInput);
console.log("Computer choice: ", computerChoice);
alert("Computer choice: " + computerChoice);

let userWins = 0;
let userLoses = 0;
let ties = 0;

if (userChoice === 'r' && computerChoice === 's') {
    userWins++;
    alert("You win. Rock beats scissors.");
} else if (userChoice === 'r' && computerChoice === 'p') {
    userLoses++;
    alert("You lose. Paper beats rock.");
} else if (userChoice === 's' && computerChoice === 'r') {
    userLoses++;
    alert("You lose. Rock beats scissors.");
} else if (userChoice === 's' && computerChoice === 'p') {
    userWins++;
    alert("You win. Scissors beat paper.");
} 
else if (userChoice === 'p' && computerChoice === 'r') {
    userWins++;
    alert("You win. Paper beats rock.");
} 
else if (userChoice === 'p' && computerChoice === 's') {
    userLoses++;
    alert("You lose. Scissors beats paper.");
} 
else {
    ties++;
    alert("It's a draw.");
}

alert("Wins: " + userWins + " Loses: " + userLoses + " Ties: " + ties);







