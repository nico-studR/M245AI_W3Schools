// lösung3_varianz_std.js

const math = require('mathjs');

const daten = [4, 7, 9, 11, 13, 15, 18];

const varianz = math.variance(daten, "uncorrected");
const std = math.std(daten, "uncorrected");

console.log("Varianz:", varianz);               // ca. 20.57
console.log("Standardabweichung:", std);        // ca. 4.54

// Streuung bewerten:
// Die Standardabweichung von ca. 4.5 zeigt eine mittlere bis hohe Streuung – die Werte sind deutlich verteilt.

// Bonusfrage: Werte um +5 erhöhen
const datenShifted = daten.map(x => x + 5);
const varianzShifted = math.variance(datenShifted, "uncorrected");

console.log("Varianz nach +5 Verschiebung:", varianzShifted); // gleich!

// Erklärung:
// Die Varianz bleibt gleich, wenn alle Werte um denselben Betrag verschoben werden.
// Nur der Mittelwert verändert sich – die Streuung bleibt identisch.
