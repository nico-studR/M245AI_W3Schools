//lösung_lagemasse.js


const math = require('mathjs');

const werte = [5, 6, 8, 8, 9, 10, 10, 10, 12, 13, 14];

const mean = math.mean(werte);
const median = math.median(werte);
const mode = math.mode(werte);

console.log("Mittelwert:", mean);   // 9.545...
console.log("Median:", median);     // 10
console.log("Modus:", mode);        // 10

// Erklärung:
// Der Mittelwert liegt bei ca. 9.5, der Median ist 10 und der Modus ist ebenfalls 10.
// Da Modus und Median übereinstimmen und die Verteilung leicht symmetrisch ist,
// beschreibt der Median hier die zentrale Tendenz am besten.
