// Aufgabe 3 – Zahl auf Skala klassifizieren (0 oder 1)
// Ziel: Das Netz soll erkennen, ob eine Zahl näher bei 0 oder bei 1 liegt.

const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// === Trainingsdaten für Werte zwischen 0 und 1 erstellen ===
// Beispiel: input: [0.1], output: [0]

// Netz trainieren
// net.train([...]);

// === Tests mit neuen Zahlen durchführen ===
// Beispiel: [0.2], [0.5], [0.9]

// Vorhersagen ausgeben
