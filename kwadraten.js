"use strict";

class Kwadraten {
    #kwadraten = [];
    constructor() {
    }
    getKwadraat(getal) {
        let kwadraat;
        kwadraat = getal ** 2;
        return kwadraat;
    }
    getkwadraatSomNatuurlijkeGetallen(maxGetal) {
        let som = 0;
        let kwadraatSom = 0;
        for (let natuurlijkGetal = 1; natuurlijkGetal <= maxGetal; natuurlijkGetal ++) {
            som += natuurlijkGetal;
        }
        kwadraatSom = som ** 2;
        return kwadraatSom; 
    }
    addKwadraat(kwadraat) {
        this.#kwadraten.push(kwadraat);
    }
    getKwadraten() {
        return this.#kwadraten;
    }
    getSomKwadraten() {
        return this.#kwadraten.reduce((som, kwadraat) => som + kwadraat);
    }
}