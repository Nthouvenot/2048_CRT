/**
 * Classe PlayerManager
 * Gestion d'une collection de joueurs
 */

const Player = require('./Player.js')


class PlayerManager {

    #players;

    constructor() {
        this.#players = [];
    }

    /**
     * Ajoute un joueur a la clollection d'objet de type Player
     * @param {Player} _player
     * @return {boolean}
     */
    create(_player) {
        if (!(_player instanceof Player)) {
            return false;
        }
        let player = Object.assign(new Player(), _player);
        this.#players.push(player);
        return Object.assign(new Player(), player);
    }

    /**
     * Lit un player de la collection d'objet de type Player d'aprés son username
     * @param {string} _username
     * @returns {Player}
     */
    read(_username) {
        if (!(typeof _username == 'string')) {
            return undefined;
        }
    /*let playerReader = this.#players.find(player => player.getUsername() == _username);*/
        let playerReader = undefined;
        for (let i = 0; i < this.#players; i++) {
            if (this.#players[i].getUsername() == _username) {
                playerReader = this.#players[i];
            }
        }
        if (playerReader == undefined) {
            return undefined;
        }
        return Object.assign(new Player(), playerReader);
    }

    /**
     * Modifie les informations d'un joueur
     * @param {Player} _player
     * @returns {Player}
     */
    update(_player) {
        if (!(_player instanceof Player)) {
            return undefined;
        }
        //Si le donnees ne sont pas valide on ne peu pas updater
        let regexPseudo = /^[a-zA-Z]{4,10}/; // regex pour le pseudo
        let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; // regex pour le password
        let regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; // regex pour l'email
        if (!regexPseudo.test(_player.getUsername()) && !regexPassword.test(_player.getPassword()) && !regexMail.test(_player.getEmail())) { 
            return undefined;
        }
        if (!(_player.getDateCreation instanceof Date) && !(_player.getLastLogged instanceof Date) && (typeof _playergetIsLogged != 'boolean')) {
            return undefined;
        }
        let player = this.#players.find(player => player.getUsername() == _player.getUsername());
        if (player == undefined) { // Si on ne trouve pas je joueur dans la collection on peu pas l'updater
            return undefined;
        }
        this.#players.slice(_player);
        return Object.assign(new Player(), player);
    }

    /**
     * Supprime un joueur en fonction de son username
     * @param {string} _username
     * @returns {boolean}
     */
    delete(_username) {
        if (!(typeof _username == 'string')) {
            return false;
        }
        let index = this.#players.indexOf('username', _username);
        if (index == undefined) {
            return false;
        }
        this.#players.splice(index, 1);
        return true;
    }
}

module.exports = PlayerManager;