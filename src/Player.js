/**
 * La classe Player
 */

class Player {
    #username;
    #password;
    #email;
    #totalGames;
    #totalScore;
    #dateCreation;
    #lastLogged;
    #isLogged;

    
    constructor(_username, _password, _email, _totalGames, _totalScore, _dateCreation, _lastLogged, _isLogged) {
        this.setUsername(_username);
        this.setPassword(_password);
        this.setEmail(_email);
        this.setTotalGames(_totalGames);
        this.setTotalScore(_totalScore);
        this.setDateCreation(_dateCreation);
        this.setLastLogged(_lastLogged);
        this.setIsLogged(_isLogged);
    }


    /**
     * 
     */
    getUsername() {
        return this.#username;
    }

    setUsername(_username) {
        _username = _username || "anonyme";
        let patt = /^[a-zA-Z]{4,10}/;
        if (typeof (_username) === 'string' && patt.test(_username))
            this.#username = _username;
    }


    getPassword() {
        return this.#password;
    }


    setPassword(_password) {
        let patt = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        if (typeof (_password) === 'string' && patt.test(_password))
            this.#password = _password;
    }


    getEmail() {
        return this.#email;
    }


    setEmail(_email) {
        _email = _email || undefined;
        let patt = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
        if (typeof (_email) === 'string' && patt.test(_email))
            this.#email = _email;
    }


    getTotalGames() {
        return this.#totalGames;
    }

    setTotalGames(_totalGames) {
        _totalGames = parseInt(_totalGames || 0);
        this.#totalGames = isFinite(_totalGames) ? _totalGames : 0;
    }

    getTotalScore() {
        return this.#totalScore;
    }

    setTotalScore(_totalScore) {
        _totalScore = parseInt(_totalScore || 0);
        this.#totalScore = isFinite(_totalScore) ? _totalScore : 0;
    }

    getDateCreation() {
        return this.#dateCreation;
    }

    setDateCreation(_dateCreation) {
        if (typeof (_dateCreation) === Date() && _dateCreation !== undefined)
            this.#dateCreation = _dateCreation;
        else
            this.#dateCreation = new Date();

    }

    getLastLogged() {
        return this.#lastLogged;
    }

    setLastLogged(_lastLogged) {
        if (typeof (_lastLogged) === Date() && _lastLogged !== undefined)
            this.#lastLogged = _lastLogged;
        else
            this.#lastLogged = new Date();
    }

    getIsLogged() {
        return this.#isLogged;
    }


    setIsLogged(_isLogged) {
        _isLogged = _isLogged || false;
        if (typeof (_isLogged) === Boolean)
            this.#isLogged = _isLogged;
    }



    /*
        isValid(_username, _password, _email) {
            let patt1 = /[^a-z]{4}/;
            let patt2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; // MIDLLPASS = ^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})
            let patt3 = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
            if (!patt1.test(_username) && patt2.test(_password) && patt2.test(_password)) {
                return true;
            } else {
                if (patt1.test(_username))
                    console.log("username n'aest pas en bon format");
                if (!patt2.test(_password))
                    console.log("Password n'est pas en bon format");
                if (!patt3.test(_email))
                    console.log("Email n'est pas en bon format");
                return false;
            }
        }
        */

}

module.exports = Player;