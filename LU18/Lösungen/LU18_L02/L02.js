// Für die math.js library führen Sie folgendes im Terminal aus: npm install mathjs
function vektorOperationen() {
    const math = require('mathjs');

    const a = [3, 2];
    const b = [1, 5];
    const c = [2, 4, 6];

    const addition = math.add(a, b);
    const subtraktion = math.subtract(a, b);
    const skalareMultiplikation = math.multiply(c, 3);

    console.log("Addition:", addition);               // [4, 7]
    console.log("Subtraktion:", subtraktion);         // [2, -3]
    console.log("Skalare Multiplikation:", skalareMultiplikation);  // [6, 12, 18]
}

vektorOperationen();