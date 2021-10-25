"use strict";

class Getallen {
    constructor() {
    }
    getKleinsteGetalDeelbaarDoorDelersTemGetal(maxDeler) {
        const getallen = new Getallen();
        let natuurlijkGetal = 20;
        let deler = 1;
        getallen.getNatuurlijkGetalNaDeling(natuurlijkGetal, deler);
        while (deler < maxDeler) {
            if (getallen.getNatuurlijkGetalNaDeling(natuurlijkGetal, deler)) {
                deler ++;
                getallen.getNatuurlijkGetalNaDeling(natuurlijkGetal, deler);
            } else {
                natuurlijkGetal += 20;
                deler = 3;
                getallen.getNatuurlijkGetalNaDeling(natuurlijkGetal, deler);
            }
        }
        return natuurlijkGetal;
    }
    getNatuurlijkGetalNaDeling(getal, deler) {
        let returnValue = false;
        if (getal % deler === 0) {
            returnValue = true;
        }
        return returnValue;
    }
    getGetalGroterDanNul(getal) {
        while (getal <= 0) {
            getal = Number(prompt("Verkeerde ingave! Geef een nieuw getal"));
        }
        return getal;
    }
    getVerschilTweeGetallen(getal1, getal2) {
        let verschil;
        if (getal1 < getal2) {
            verschil = getal2 - getal1;
        } else {
            verschil = getal1 - getal2;
        }
        return verschil;
    }
}