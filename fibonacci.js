"use strict";

class Fibonacci {
    #evenFibonacciGetallen = [];
    #fibonacciGetallen = [];
    constructor() {
    }
    getFibonacciGetal(getal1, getal2) {
        return getal1 + getal2;
    }
    addFibonacciGetal(getal) {
        this.#fibonacciGetallen.push(getal);
    }
    getFibonacciGetallen() {
        return this.#fibonacciGetallen;
    }
    addEvenFibonacciGetal() {
        for (const getal of this.#fibonacciGetallen) {
            if (getal % 2 === 0) {
                this.#evenFibonacciGetallen.push(getal);
            }
        }
    }
    getEvenFibonacciGetallen() {
        return this.#evenFibonacciGetallen;
    }
    getSomEvenFibonacciGetallen(evenFibonacciGetallen) {
        return evenFibonacciGetallen.reduce((som, evenGetal) => som + evenGetal); 
    }
}