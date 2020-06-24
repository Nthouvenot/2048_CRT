class ZoneQuadrillee extends Point {

    /*
    Implémenter une classe représentant une zone quadrillée à 2 dimensions.
    Une zone est définie par une largeur(nombre de colonnes) et une hauteur(nombre de lignes).
    Dans cette zone, il sera possible d 'y ajouter des objets (1 par "case"). 
    Le type d 'objet accepté dans la zone (un seul type par zone) est défini dans le constructeur.
    */


    constructor(_x, _y) {
        this.x2 = parseInt(_x);
        this.y1 = parseInt(_y);
        if (_x > screen.width / 10) {
            return false;
        }
        if (_y > screen.height / 10) {
            return false;
        }
        this.setLargeur(_x);
        this.setLongueur(_y);

        this.setNbCase(_x, _y);
    }

    setLongueur(_y) {;
        this.y1 = parseInt(_y) * 10;
    }

    getLongueur() {
        return this.y1;
    }
    setLargeur(_x) {
        this.x2 = parseInt(_x) * 10;
    }

    getLargeur() {
        return this.x2;
    }
    setNbCase(_x, _y) {
        this.nbCase = parseInt(_x) * parseInt(_y);
    }
    getNbCase() {
        return this.nbCase;
    }

}