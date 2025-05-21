import * as tf from '@tensorflow/tfjs'

async function runTF() {
    const jsonData = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    let values = await jsonData.json();
    values = values.map(extractData).filter(removeErrors);
    console.log("Bereinigte Daten:", values);
    convertToTensors(values)
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
}
runTF();