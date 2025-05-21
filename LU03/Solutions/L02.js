const numPoints = 500;
const xPoints = [];
const yPoints = [];

for (let i = 0; i < numPoints; i++) {
    xPoints[i] = Math.random() * 100; // Beispiel-Skalierung
    yPoints[i] = Math.random() * 100;
    console.log(xPoints)
    console.log(yPoints)
}

function f(x) {
    return x * 1.2 + 50;
}

