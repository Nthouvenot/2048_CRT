class Point {
    /**
     * Constructeur: Initialise une nouvelle instance de la classe "Point"
     * @param int _x Coordonnée horizontale du point (abscisse). Valeur négative acceptée
     * @param int _y Coordonnée verticale du point (ordonnée). Valeur négative acceptée
     */

    constructor(_x, _y) {
        this.x = parseInt(_x);
        this.y = parseInt(_y);
    }

    toString() {
        return "(" + this.x + "," + this.y + ")";
    }

}