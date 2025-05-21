// TensorFlow.js importieren (nur in Node.js notwendig) hier als tf importiert
// Um das package zu installieren -> npm install @tensorflow/tfjs in der Konsole

//AUFGABE
//Schreibe ein JavaScript-Programm, das Zwei 1D-Tensoren mit den Werten [2, 4, 6] und [1, 2, 3] erstellt.
// Diese Tensoren addiert, subtrahiert, multipliziert und dividiert.
// Resultate sollen in der Konsole ausgegeben werden


const tf = require('@tensorflow/tfjs');

const tensorA = //TODO
const tensorB = //TODO

const addition = //TODO
const subtraction = //TODO
const multiplication = //TODO
const division = //TODO


Promise.all([
    addition.array(),
    subtraction.array(),
    multiplication.array(),
    division.array()
]).then(([add, sub, mul, div]) => {
    console.log("Addition:", add);
    console.log("Subtraktion:", sub);
    console.log("Multiplikation:", mul);
    console.log("Division:", div);
});