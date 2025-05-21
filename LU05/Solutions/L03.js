function Perceptron(no, learningRate = 0.00001) {
    this.learnc = learningRate;
    this.bias = 1;
    this.weights = [];
    for (let i = 0; i <= no; i++) {
        this.weights[i] = Math.random() * 2 - 1;
    }

    this.activate = function(inputs) {
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return (sum > 0) ? 1 : 0;
    };

    this.train = function(inputs, desired) {
        inputs.push(this.bias);
        let guess = this.activate(inputs);
        let error = desired - guess;
        for (let i = 0; i < inputs.length; i++) {
            this.weights[i] += this.learnc * error * inputs[i];
        }
    };
}

// Trainingsdaten generieren
const numPoints = 500;
const x = [], y = [], labels = [];
function line(x) { return 1.2 * x + 50; }

for (let i = 0; i < numPoints; i++) {
    x[i] = Math.random() * 400;
    y[i] = Math.random() * 400;
    labels[i] = (y[i] > line(x[i])) ? 1 : 0;
}

// Perzeptron trainieren
const ptron = new Perceptron(2);
for (let j = 0; j < 10000; j++) {
    for (let i = 0; i < numPoints; i++) {
        ptron.train([x[i], y[i]], labels[i]);
    }
}

// Testdaten generieren
let fehler = 0;
for (let i = 0; i < numPoints; i++) {
    const newX = Math.random() * 400;
    const newY = Math.random() * 400;
    const correct = (newY > line(newX)) ? 1 : 0;
    const guess = ptron.activate([newX, newY, 1]);
    if (guess !== correct) fehler++;
}

console.log("Fehlklassifizierungen:", fehler);
