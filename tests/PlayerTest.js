/**
 * Test de la classe Player
 * Validation des m�thodes de la classe
 * Validation de la s�curit� des donn�es
**/

const Player = require('../src/Player.js');

let player1 = new Player("Xgamer", "1j5m854i2n", "xgamer@gmail.com", 0, 0, Date.now(), Date.now(), Date.now(), true);

console.log("nom du joueur" + player1.getUsername());
console.log("mail du joueur" + player1.getEmail());
console.log("date de cr�ation du joueur" + player1.getDateCreation());
console.log("score du joueur" + player1.getTotalScore());
console.log("nombre de partie du joueur" + player1.getTotalGames());