'use strict'

var human = "";
var pc = "";

var game = ["rock", "paper", "scissor"];
var win_human = 0;
var win_pc = 0;
var menu = 0;
var round = 1;

while (win_human < 5 || win_pc < 5){
    switch(menu){
        case 0:
            human = prompt("Write what you want to use:");
            let randomIndex = Math.floor(Math.random() * game.length);
            pc = game[randomIndex];
            menu++;
            break;
        case 1:
            if(human != "paper" && human != "rock" && human != "scissor"){
                menu = 0;
                alert("You have select an element that is not in the game, you have only the paper, rock and scissor");
            } else{
                menu++;
            }
            break;
        case 2:
            if(human == pc){
                alert("Nobody wins round " + round);
                console.log("Round " + round + ":");
                console.log("Human: " + win_human);
                console.log("Pc: " + win_pc);
                round++;
                menu = 0;
            }else if((human == "rock" && pc == "scissor") || (human == "scissor" && pc == "paper") || (human == "paper" && pc == "rock")){
                win_human++;
                alert("Human wins round " + round);
                console.log("Round " + round + ":");
                console.log("Human: " + win_human);
                console.log("Pc: " + win_pc);
                round++;
                menu = 0;
            }else{
                win_pc++;
                alert("PC wins round " + round);
                console.log("Round " + round + ":");
                console.log("Human: " + win_human);
                console.log("Pc: " + win_pc);
                round++;
                menu = 0;
            }
            break;
    }
}

if(win_human == 5){
    alert("Human wins the game");
}else{
    alert("PC wins the game");
}

alert("The game finish");