type Ranking = [number, string, boolean];

let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: Ranking;
let hallOfRanking: Ranking[] = [];

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

function printRankings(rankings: Ranking[]): void {
    for (const ranking of rankings) {
      console.log(`Posicion: ${ranking[0]}, Jugador: ${ranking[1]}, Finalizado: ${ranking[2]}`);
    }
  }

printRankings(hallOfRanking);
