import * as tf from '@tensorflow/tfjs'

async function runTF() {
    const jsonData = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    let values = await jsonData.json();
    values = values.map(extractData).filter(removeErrors);
    console.log("Bereinigte Daten:", values);
    await trainModel(values)
}

function extractData(obj) {
    return {x:obj.Horsepower, y:obj.Miles_per_Gallon};
}
function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}

function convertToTensors(data) {
    const inputs = data.map(d => d.x);
    const labels = data.map(d => d.y);

    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    const inputMin = inputTensor.min();
    const inputMax = inputTensor.max();
    const labelMin = labelTensor.min();
    const labelMax = labelTensor.max();

    const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

    normalizedInputs.print();
    normalizedLabels.print();

    console.log(" Normalisierte Eingaben:");
    normalizedInputs.print();
    console.log(" Normalisierte Ausgaben:");
    normalizedLabels.print();
    return {normalizedInputs, normalizedLabels};

}

//Erstelle ein Trainingsmodell, das mit den bereinigten Autodaten trainiert wird. Verwende dabei:
//Implementiere die Trainingsfunktion so, dass sie:
// Ein sequentielles Modell erstellt
// Zwei Dense-Layers verwendet
// Das Modell kompiliert
// Die Daten vorher in Tensoren normalisiert (aus convertToTensors)
// model.fit() mit epochs: 50 ausführt
// Nach jeder Epoche den Loss-Wert ausgibt
async function trainModel(data) {

}

runTF();