// Lösung – Eigene Logikregel: "Mindestens eine 1 ergibt 1"

const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// Trainingsdaten: mindestens eine 1 → Ausgabe 1, sonst 0
net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [1] }
]);

// Tests
console.log('Eingabe [0, 0]:', net.run([0, 0]));
console.log('Eingabe [0, 1]:', net.run([0, 1]));
console.log('Eingabe [1, 1]:', net.run([1, 1]));
