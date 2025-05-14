// ml_prediction_solution.js

const w = 2.5;
const b = 5;

function predict(x) {
    return b + w * x;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Gib einen Eingabewert für x ein: ', (input) => {
    const x = parseFloat(input);
    if (isNaN(x)) {
        console.log('Bitte gib eine gültige Zahl ein.');
    } else {
        const y = predict(x);
        console.log(`Das Modell sagt voraus: ${y}`);
    }
    readline.close();
});
