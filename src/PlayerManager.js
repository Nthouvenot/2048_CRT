const player = require('./Player.js')


class PlayerManager {

    #player;

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
        let player = Object.assign(new Player(), _player)
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
        let playerReader = this.#players.find(player => player.getUsername() == _username);
        if (playerReader != undefined) {
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
        if (!(_player instanceof 'Player')) {
            return undefined;
        }
        if (!this.delete(_player.getUsername())) {
            return undefined;
        }
        return this.create(_player);
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