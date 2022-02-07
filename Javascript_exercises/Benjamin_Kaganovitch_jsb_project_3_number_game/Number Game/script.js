var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var msg4 = document.getElementById("message4");

var answer = Math.floor(Math.random()*1000) + 1;
var no_of_guesses = 0;
var guessed_nums = [];
var points = 100;

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 1000){
        alert("Incorrect value: The range is 1 - 1000");
    }

    else{
        guessed_nums.push(user_guess);
        no_of_guesses+= 1;
        points -= 5;
        
        if(user_guess < answer){
            msg1.textContent = "Too Low!";
            msg2.textContent = "Number of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +
            guessed_nums;
            msg4.textContent = "You have: " + points + "pts";
        }
        else if(user_guess > answer){
            msg1.textContent = "Too High!";
            msg2.textContent = "Number of guess: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " +
            guessed_nums;
            msg4.textContent = "You have: " + points + "pts";
        }
        else if(user_guess == answer){
            msg1.textContent = "You Got the right answere";
            msg3.textContent = "You guessed it in "+ no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
            msg4.textContent = "You have: " + points + "pts";
        }
    }
}