/**
 * Test de la classe PlayerManager
 * Validation des méthodes de la classe
 * Validation de la sécurité des données
**/

const Player = require('../src/Player.js');
const PlayerManager = require('../src/PlayerManager.js');

//Creation d'une collection de joueurs et creation de deux joueurs
let collectionPlayer = new PlayerManager();
let player1 = new Player("Xgamer", "1j5m854i2n", "xgamer@gmail.com", 0, 0, Date.now(), Date.now(), Date.now(), true);
let player2 = new Player("GamerMaster", "n12C5@z& j23", "GamerMaster@gmail.com", 0, 0, Date.now(), Date.now(), Date.now(), true);

//Met dans la collection les deux joueurs pcédemmment créer
collectionPlayer.create(player1);
collectionPlayer.create(player2);

//Affichage des deux joueurs
console.log(collectionPlayer.read("Xgamer"));
console.log(collectionPlayer.read("GamerMaster"));
