// Lösung – XOR-Netz trainieren und testen

const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// Trainingsdaten für XOR
net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]);

// Tests
console.log('Eingabe [1, 0]:', net.run([1, 0]));
console.log('Eingabe [1, 1]:', net.run([1, 1]));
