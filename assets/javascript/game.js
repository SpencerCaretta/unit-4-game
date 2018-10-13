//Function for beginning of game numbers

$(document).ready(function() {
    //UserScore assigned to 0 for beginning of game
    var userScore = 0;
    //Targetscore generated for beginning of game
    var targetScore = Math.floor(Math.random() * 101) + 19;
    //Assign random values of each crystal between 1 and 12 (hidden) at beginning of game
    var Ruby = Math.floor(Math.random() * 12) + 1;
    var Sapphire = Math.floor(Math.random() * 12) + 1;
    var Emerald = Math.floor(Math.random() * 12) + 1;
    var Diamond = Math.floor(Math.random() * 12) + 1;
    //Wins and Losses start at 0 upon beginning of playing
    var wins = document.getElementById("winsText");
    var losses = document.getElementById("lossesText");

});

function restart() {
    //make userScore back to 0 and recalculate all random numbers
    userScore = 0;
    $("#User-Score").text = userScore;
    targetScore = Math.floor(Math.random() * 101) + 19;
    $("#Target-Score").text(targetScore);
    Ruby = Math.floor(Math.random() * 12) + 1;
    Sapphire = Math.floor(Math.random() * 12) + 1;
    Emerald= Math.floor(Math.random() * 12) + 1;  
    Diamond = Math.floor(Math.random() * 12) + 1;
};

//Redeclared for outer functions
var userScore = 0;
var targetScore = Math.floor(Math.random() * 101) + 19;
var Ruby = Math.floor(Math.random() * 12) + 1;
var Sapphire = Math.floor(Math.random() * 12) + 1;
var Emerald = Math.floor(Math.random() * 12) + 1;
var Diamond = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");

//Random number generated and pushed to Target-Score id
$("#Target-Score").text(targetScore);

//When each gem is click, add random number to User-Score aka onclick function
$("#Ruby").click(function () {
    //shows the users score after clicking on the Ruby
    $("#User-Score").text(userScore + Ruby);
    //change the value of userScore to the new total after clicking the Ruby
    userScore += Ruby;

    //If total is = Target-Score you win, add 1 to win counter and update html
    if (userScore === targetScore) {
        console.log("Winner!");
        wins++;
        console.log(wins);
        winsText.textContent = "Wins: " + wins;
        restart();
        //Reset everything besides win/loss counter
    }

    //If total is over Target-Score you Lose, add 1 to lose counter and update html
    else if (userScore > targetScore) {
        console.log("Loser!");
        losses++;
        console.log(losses);
        lossesText.textContent = "Losses: " + losses;
        restart();
        //Reset everything besides win/loss counter
    }

})

$("#Sapphire").click(function () {
    //shows the users score after clicking on the Sapphire
    $("#User-Score").text(userScore + Sapphire);
    //change the value of userScore to the new total after clicking the Sapphire
    userScore += Sapphire;

    //If total is = Target-Score you win, add 1 to win counter and update html
    if (userScore === targetScore) {
        console.log("Winner!");
        wins++;
        console.log(wins);
        winsText.textContent = "Wins: " + wins;
        restart();
        //Reset everything besides win/loss counter
    }

    //If total is over Target-Score you Lose, add 1 to lose counter and update html
    else if (userScore > targetScore) {
        console.log("Loser!");
        losses++;
        console.log(losses);
        lossesText.textContent = "Losses: " + losses;
        restart();
        //Reset everything besides win/loss counter
    }

})

$("#Emerald").click(function () {
    //shows the users score after clicking on the Emerald
    $("#User-Score").text(userScore + Emerald);
    //change the value of userScore to the new total after clicking the Emerald
    userScore += Emerald;

    //If total is = Target-Score you win, add 1 to win counter and update html
    if (userScore === targetScore) {
        console.log("Winner!");
        wins++;
        console.log(wins);
        winsText.textContent = "Wins: " + wins;
        restart();
        //Reset everything besides win/loss counter
    }

    //If total is over Target-Score you Lose, add 1 to lose counter and update html
    else if (userScore > targetScore) {
        console.log("Loser!");
        losses++;
        console.log(losses);
        lossesText.textContent = "Losses: " + losses;
        restart();
        //Reset everything besides win/loss counter
    }

})

$("#Diamond").click(function () {
    //shows the users score after clicking on the Diamond
    $("#User-Score").text(userScore + Diamond);
    // the value of userScore to the new total after clicking the Diamond
    userScore += Diamond;

    //If total is = Target-Score you win, add 1 to win counter and update html
    if (userScore === targetScore) {
        console.log("Winner!");
        wins++;
        console.log(wins);
        winsText.textContent = "Wins: " + wins;
        restart();
        //Reset everything besides win/loss counter
    }

    //If total is over Target-Score you Lose, add 1 to lose counter and update html
    else if (userScore > targetScore) {
        console.log("Loser!");
        losses++;
        console.log(losses);
        lossesText.textContent = "Losses: " + losses;
        restart();
        //Reset everything besides win/loss counter
    }

});


