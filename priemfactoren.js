"use strict";

class Priemgetal {
    constructor() {
    }
    isGetalPriemgetal(getal) {
        let returnValue = false;
        if (getal < 1) {
            returnValue;
        } else if (getal < 4) {
            returnValue = true;
        } else {
            const helft = getal / 2;
            let teller = 2;
            while (teller <= helft && (getal % teller) !== 0) {
                teller ++;
            }
            if (teller > helft) {
                returnValue = true;
            } else {
                returnValue;
            }
        }
        return returnValue;
    }
    getVolgendPriemgetal(vorigPriemgetal) {
        let nieuwPriemgetal = vorigPriemgetal;
        nieuwPriemgetal ++;
        while (! this.isGetalPriemgetal(nieuwPriemgetal)) {
            nieuwPriemgetal ++;
        }
        return nieuwPriemgetal;
    }
    getPriemfactor(gegevenGetal) {
        let priemfactor;
        const eerstePriemgetal = 1;
        let mogelijkPriemgetal = this.getVolgendPriemgetal(eerstePriemgetal);
        while (gegevenGetal !== eerstePriemgetal) {
            if (gegevenGetal % mogelijkPriemgetal === 0) {
                gegevenGetal = gegevenGetal / mogelijkPriemgetal;
            } else {
                mogelijkPriemgetal = this.getVolgendPriemgetal(mogelijkPriemgetal);
            }
        }
        priemfactor = mogelijkPriemgetal;
        return priemfactor;
    }
}