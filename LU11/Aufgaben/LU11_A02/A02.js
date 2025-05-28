// TensorFlow.js importieren (nur für Node.js nötig)
const tf = require('@tensorflow/tfjs');

//AUFGABE
//Erstelle einen Tensor mit den Werten [1, 2, 3, 4, 5, 6, 7, 8] und forme ihn wie folgt um:
// In eine Matrix mit 2 Zeilen und 4 Spalten ([2, 4])
// In eine Matrix mit 4 Zeilen und 2 Spalten ([4, 2])
// In einen Vektor mit einer Spalte und 8 Zeilen ([8, 1])



// Ursprünglichen Tensor erstellen
//const tensor = TODO

// Verschiedene Umformungen (reshape)
//const reshaped1 = TODO
//const reshaped2 = TODO
//const reshaped3 = TODO

// Ergebnisse ausgeben
Promise.all([
    reshaped1.array(),
    reshaped2.array(),
    reshaped3.array()
]).then(([r1, r2, r3]) => {
    console.log("Reshape [2, 4]:", r1);
    console.log("Reshape [4, 2]:", r2);
    console.log("Reshape [8, 1]:", r3);
});