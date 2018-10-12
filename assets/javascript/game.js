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
    var wins = 0;
    var losses = 0;

});
//Redeclared for outer functions
var userScore = 0;
var targetScore = Math.floor(Math.random() * 101) + 19;
var Ruby = Math.floor(Math.random() * 12) + 1;
var Sapphire = Math.floor(Math.random() * 12) + 1;
var Emerald = Math.floor(Math.random() * 12) + 1;
var Diamond = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;

//Random number generated and pushed to Target-Score id
$("#Target-Score").text(targetScore)

//When each gem is click, add random number to User-Score aka onclick function
$("#Ruby").click(function () {
    //shows the users score after clicking on the Ruby
    $("#User-Score").text(userScore + Ruby);
    //change the value of userScore to the new total after clicking the Ruby
    userScore += Ruby;
})

$("#Sapphire").click(function () {
    //shows the users score after clicking on the Sapphire
    $("#User-Score").text(userScore + Sapphire);
    //change the value of userScore to the new total after clicking the Sapphire
    userScore += Sapphire;
})

$("#Emerald").click(function () {
    //shows the users score after clicking on the Emerald
    $("#User-Score").text(userScore + Emerald);
    //change the value of userScore to the new total after clicking the Emerald
    userScore += Emerald;
})

$("#Diamond").click(function () {
    //shows the users score after clicking on the Diamond
    $("#User-Score").text(userScore + Diamond);
    // the value of userScore to the new total after clicking the Diamond
    userScore += Diamond;
})

//If total is over Target-Score you Lose, add 1 to lose counter
if (userScore > targetScore) {
    losses++;
}

//If total is = Target-Score you win, add 1 to win counter
if (userScore === targetScore) {
    wins++;
}
