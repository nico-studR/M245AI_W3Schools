// lösung2_ausreisser.js

const math = require('mathjs');

const werteMitAusreisser = [72, 75, 73, 76, 74, 120];
const werteOhneAusreisser = [72, 75, 73, 76, 74];

const meanMit = math.mean(werteMitAusreisser);
const meanOhne = math.mean(werteOhneAusreisser);

console.log("Mittelwert mit Ausreißer:", meanMit);   // ca. 81.66
console.log("Mittelwert ohne Ausreißer:", meanOhne); // ca. 74

// Erklärung:
// Der Ausreißer (120) hebt den Mittelwert stark an.
// Median oder Modus wären in so einem Fall sinnvoller, da sie robuster gegenüber Ausreißern sind.
