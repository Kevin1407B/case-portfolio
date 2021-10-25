"use strict";

class Veelvouden {
    #veelvoud1;
    #veelvoud2;
    #veelvouden = [];
    constructor(veelvoud1, veelvoud2) {
        this.#veelvoud1 = veelvoud1;
        this.#veelvoud2 = veelvoud2;
    }
    getVeelvoud(getal) {
        let tempVeelvoud = getal;
        if ((tempVeelvoud % this.#veelvoud1) === 0 || 
        (tempVeelvoud % this.#veelvoud2) === 0) {
            return tempVeelvoud;
        }
    }
    addVeelvoud(veelvoud) {
        this.#veelvouden.push(veelvoud);
    }
    getVeelvouden() {
        return this.#veelvouden;
    }
    getSomVeelvouden(array) {
        let tempArray = array;
        return tempArray.reduce((som, getal) => som + getal);
    }
}