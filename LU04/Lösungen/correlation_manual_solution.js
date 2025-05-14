// correlation_manual_solution.js

const x = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const y = [15, 23, 35, 42, 55, 61, 73, 85, 96, 102];

function mean(arr) {
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
}

function pearsonCorrelation(x, y) {
    const x̄ = mean(x);
    const ȳ = mean(y);
    let numerator = 0;
    let xDen = 0;
    let yDen = 0;

    for (let i = 0; i < x.length; i++) {
        const dx = x[i] - x̄;
        const dy = y[i] - ȳ;
        numerator += dx * dy;
        xDen += dx * dx;
        yDen += dy * dy;
    }

    return numerator / Math.sqrt(xDen * yDen);
}

const r = pearsonCorrelation(x, y);
console.log(`Korrelationskoeffizient r = ${r.toFixed(2)}`);

if (r > 0.7) {
    console.log("→ starke positive Korrelation");
} else if (r < -0.7) {
    console.log("→ starke negative Korrelation");
} else {
    console.log("→ schwache oder keine Korrelation");
}
