// Requirements: 
// 1. Number between 1 and 100
// 2. Has to be a Number
// 3. If number is lower, let window.alert = Num too low, same for high
// 4. Have an attempt counter

let attempt = 0;
const minNum = 1;
const maxNum = 100;

let answer = Math.floor(Math.random()* (maxNum-minNum + 1)) + minNum;
let guess;
let gameRunning = true;


function game() {
    while (gameRunning) {
        guess = window.prompt(`Please enter a Number between ${minNum} and ${maxNum}`)
        guess = Number(guess)
    
        if(isNaN(guess)) {
            window.alert("Please enter a valid number");
        }
        else if(guess < minNum || guess > maxNum) {
            window.alert("Please enter a valid number")
        }
        else{
            attempt++
            if(guess < answer){
                window.alert("TOO LOW! TRY AGAIN!");
            }
            else if(guess > answer){
                window.alert("TOO HIGH TRY AGAIN!")
            }
            else{
                window.alert(`You have guessed correctly! Congrats! It took you ${attempt} attempts!`)
                gameRunning = false
            }
        }
    }
}
