// Lösung – Zahl zwischen 0 und 1 klassifizieren (nahe 0 → 0, nahe 1 → 1)

const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// Trainingsdaten
net.train([
    { input: [0.1], output: [0] },
    { input: [0.2], output: [0] },
    { input: [0.3], output: [0] },
    { input: [0.7], output: [1] },
    { input: [0.8], output: [1] },
    { input: [0.9], output: [1] }
]);

// Tests
console.log('Eingabe [0.2]:', net.run([0.2]));
console.log('Eingabe [0.5]:', net.run([0.5]));
console.log('Eingabe [0.9]:', net.run([0.9]));
