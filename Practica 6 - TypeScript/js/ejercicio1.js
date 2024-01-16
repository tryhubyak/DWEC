"use strict";
let position;
let playerName;
let finishedGame;
let ranking;
let hallOfRanking = [];
position = 1;
playerName = "Veronika";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);
position = 2;
playerName = "Maria";
finishedGame = false;
ranking = [position, playerName, finishedGame];
hallOfRanking.push(ranking);
function printRankings(rankings) {
    for (const ranking of rankings) {
        console.log(`Posicion: ${ranking[0]}, Jugador: ${ranking[1]}, Finalizado: ${ranking[2]}`);
    }
}
printRankings(hallOfRanking);
