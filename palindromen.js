"use strict";

class Palindromen {
    constructor() {
    }
    getPalindromen(eersteGetal, tweedeGetal) {
        let copyEersteGetal = eersteGetal;
        let bovengrens1 = this.bovenwaardeOpBasisVanOnderwaarde(eersteGetal);
        let bovengrens2 = this.bovenwaardeOpBasisVanOnderwaarde(tweedeGetal);
        let productGetallen;
        const tempArray = [];
        while (tweedeGetal <= bovengrens2) {
            while (eersteGetal <= bovengrens1) {
                productGetallen = eersteGetal * tweedeGetal;
                eersteGetal ++;
                if (StringPatronen.isPalindroom(productGetallen)) {
                    tempArray.push(productGetallen);
                }
            }
            eersteGetal = copyEersteGetal;
            tweedeGetal ++;
        }
        return tempArray;
    }
    bovenwaardeOpBasisVanOnderwaarde(onderwaarde) {
        return ((onderwaarde * 10) - 1);
    }
}

class StringPatronen {
    constructor() {
    }
    static isPalindroom(input) {
        let stringVanInput = input.toString();
        let omgekeerd = "";
        let returnValue = false;
        for (const teken of stringVanInput) {
            omgekeerd = teken + omgekeerd;
        }
        if (omgekeerd === stringVanInput) {
            returnValue = true;
        }
        return returnValue;
    }
}