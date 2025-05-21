const numPoints = 500;
const xPoints = [];
const yPoints = [];
const desired = [];

for (let i = 0; i < numPoints; i++) {
    xPoints[i] = Math.random() * 100; // Beispiel-Skalierung
    yPoints[i] = Math.random() * 100;
}

function f(x) {
    return x * 1.2 + 50;
}

// Berechne die gewünschten Ausgaben
for (let i = 0; i < numPoints; i++) {
    if (yPoints[i] > f(xPoints[i])) {
        desired[i] = 1; // über der Linie
    } else {
        desired[i] = 0; // unter der Linie
    }

// Optional: in Konsole anzeigen
    console.log(`Punkt ${i + 1}: x=${xPoints[i].toFixed(2)}, y=${yPoints[i].toFixed(2)}, desired=${desired[i]}`);
}
