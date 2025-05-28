// Für die math.js library führen Sie folgendes im Terminal aus: npm install mathjs

//AUFGABE
//Schreibe eine JavaScript-Funktion (mithilfe von math.js) vektorOperationen(), welche folgende Operationen mit Vektoren durchführt:
// 1.	Addition zweier Vektoren: [3,2]+[1,5]
// 2.	Subtraktion (mit Gegenvektor): [3,2]−[1,5]
// 3.	Multiplikation mit Skalar: [2,4,6]∗3
function vektorOperationen() {
    const math = require('mathjs');

    //const a = TODO
    //const b = TODO
    //const c = TODO

    //const addition = TODO
    //const subtraktion = TODO
    //const skalareMultiplikation = TODO

    console.log("Addition:", addition);               // [4, 7]
    console.log("Subtraktion:", subtraktion);         // [2, -3]
    console.log("Skalare Multiplikation:", skalareMultiplikation);  // [6, 12, 18]
}
//Lösungen sollen mit [4, 7], [2,-3], [6, 12, 18] übereinstimmen

vektorOperationen();