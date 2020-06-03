const player = require('./Player.js')


class PlayerManager {

    constructor() {
        this.players = [];
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
        this.players.push(_player);
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
        let playerReader = this.players.find(player => player.username == _username);
        if (playerReader != undefined) {
            return undefined;
        }
        return Object.assign(playerReader);
    }

    update(_player) {
        if (!(_player instanceof 'Player')) {
            return undefined;
        }
        if (!this.delete(_player.username)) {
            return undefined;
        }
        this.create(_player);
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
        let index = this.players.indexOf('username', _username);
        if (index == undefined) {
            return false;
        }
        this.players.splice(index, 1);
        return true;
}