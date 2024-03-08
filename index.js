var player1Name = prompt("Enter name of first player: ");
var player2Name = prompt("Enter name of second player: ");

document.querySelector(".p1").innerHTML = player1Name;
document.querySelector(".p2").innerHTML = player2Name;


var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var player1 = document.querySelector(".img1");
var player2 = document.querySelector(".img2");

player1.src = "./images/dice" + randomNumber1 + ".png";
player2.src = "./images/dice" + randomNumber2 + ".png";


var winStatement = document.querySelector("h1");
if(randomNumber1>randomNumber2){
    winStatement.innerText = "🚩 " + player1Name + " Wins!";
} else if (randomNumber2>randomNumber1){
    winStatement.innerText = player2Name + " Wins! 🚩";
} else{
    winStatement.innerText = "Draw!";
}