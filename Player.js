class Player {
    constructor(_username, _password, _email, _totalGames, _totalScore, _dateCreation, _lastLogged, _isLogged) {
        this.username = '_username' || 'any';
        this.password = '_password' || 'one';
        this.email = '_email' || 'undefinde';
        this.totalGames = parseInt(_totalGames);
        this.totalScore = parseInt(_totalScore);
        this.dateCreation = _dateCreation;
        this.lastLogged = _lastLogged;
        this.isLogged = _isLogged || false;
    }



}