/**
 * Test de la classe Player
 * Validation des méthodes de la classe
 * Validation de la sécurité des données
**/

const Player = require('../src/Player.js');

let player1 = new Player("Xgamer", "1j5m854i2n", "xgamer@gmail.com", 0, 0, Date.now(), Date.now(), Date.now(), true);

console.log("Affichage des attributs par les getters : ")
console.log("nom du joueur : " + player1.getUsername());
console.log("mail du joueur : " + player1.getEmail());
console.log("date de création du joueur : " + player1.getDateCreation());
console.log("score du joueur : " + player1.getTotalScore());
console.log("nombre de partie du joueur : " + player1.getTotalGames());

//On modifie les donnees du joueur
player1.setUsername("GameMaster");
player1.setEmail("gamemaster@gmail.com");
player1.setTotalGames(12);
player1.setTotalScore(1200);
player1.setLastLogged(Date.now());

//On reaffiche les donnes apres les modifications
console.log("Affichage des attributs par les getters apres modification du joueur : ")
console.log("nom du joueur : " + player1.getUsername());
console.log("mail du joueur : " + player1.getEmail());
console.log("date de connexion du joueur : " + player1.getLastLogged());
console.log("score du joueur : " + player1.getTotalScore());
console.log("nombre de partie du joueur : " + player1.getTotalGames());