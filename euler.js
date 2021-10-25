"use strict";

// JavaScript voor Project Euler
document.getElementById("start--oef1").addEventListener("click", () => {
    const eersteVeelvoud = 3;
    const tweedeVeelvoud = 5;
    const getal = 1000;

    const veelvouden = new Veelvouden(eersteVeelvoud, tweedeVeelvoud, getal);

    for (let teller = 1; teller < getal; teller ++) {
        let getal = veelvouden.getVeelvoud(teller);
        if (getal !== undefined) {
            veelvouden.addVeelvoud(getal);
        }
    }
    const arrayVeelvouden = veelvouden.getVeelvouden();
    document.getElementById("uitkomst--oef1").innerText = `*${veelvouden.getSomVeelvouden(arrayVeelvouden)}*`;
});

document.getElementById("start--oef2").addEventListener("click", () => {
    let getal1 = 0;
    let getal2 = 1;
    const eindGetal = 4000000;

    const fibonacci = new Fibonacci();

    while (getal1 + getal2 < eindGetal) {
        getal1 = fibonacci.getFibonacciGetal(getal1, getal2);
        fibonacci.addFibonacciGetal(getal1);
        getal2 = fibonacci.getFibonacciGetal(getal2, getal1);
        fibonacci.addFibonacciGetal(getal2);
    }
    fibonacci.addEvenFibonacciGetal();
    document.getElementById("uitkomst--oef2").innerText = `*${fibonacci.getSomEvenFibonacciGetallen(fibonacci.getEvenFibonacciGetallen())}*`;
});

document.getElementById("start--oef3").addEventListener("click", () => {
    const teDelenGetal = 600851475143;
    const priemgetal = new Priemgetal();
    document.getElementById("uitkomst--oef3").innerText = `*${priemgetal.getPriemfactor(teDelenGetal)}*`;
});

document.getElementById("start--oef4").addEventListener("click", () => {
    let getalEen = 100;
    let getalTwee = 100;
    let palindroom = new Palindromen();
    const palindromen = palindroom.getPalindromen(getalEen, getalTwee);
    document.getElementById("uitkomst--oef4").innerText = `*${palindromen.reduce((grootste, palindroom) => {if(grootste > palindroom) return grootste; return palindroom;})}*`;
});

document.getElementById("start--oef5").addEventListener("click", () => {
    const kleinsteGetalNaDeling = new Getallen();
    const max = Number(prompt("Geef een natuurlijk getal"));
    document.getElementById("uitkomst--oef5").innerText = 
        `*${kleinsteGetalNaDeling.getKleinsteGetalDeelbaarDoorDelersTemGetal(max)}*`;
});

document.getElementById("start--oef6").addEventListener("click", () => {
    const hoeveelGetallen = new Getallen().getGetalGroterDanNul(Number(prompt("Geef een getal")));
    const kwadraten = new Kwadraten();
    for (let teller = 1; teller <= hoeveelGetallen; teller ++) {
        const kwadraat = kwadraten.getKwadraat(teller);
        kwadraten.addKwadraat(kwadraat);        
    }
    let kwadraatSomNatuurlijkeGetallen = kwadraten.getkwadraatSomNatuurlijkeGetallen(hoeveelGetallen);
    let somKwadraten = kwadraten.getSomKwadraten();
    const verschil = new Getallen().getVerschilTweeGetallen(somKwadraten, kwadraatSomNatuurlijkeGetallen); 
    document.getElementById("uitkomst--oef6").innerText = `*${verschil}*`;
});
