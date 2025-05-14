// aufgabe1_einfach_preisvorhersage.js

const w = 0.09;
const b = 1.5;

function vorhersage(x) {
    const y = w * x + b;
    const gerundet = Math.round(y);
    console.log("Vorhergesagter Preis:", gerundet, "Millionen CHF");
}

// Beispiel:
vorhersage(85);
