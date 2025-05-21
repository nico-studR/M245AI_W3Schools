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
async function trainModel(data) {
    const {normalizedInputs, normalizedLabels} = convertToTensors(data);

    const model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [1], units: 50, activation: 'relu'}));
    model.add(tf.layers.dense({units: 1}));

    model.compile({
        optimizer: tf.train.sgd(0.01),
        loss: tf.losses.meanSquaredError
    });

    console.log(" Training startet...");

    await model.fit(normalizedInputs, normalizedLabels, {
        epochs: 50,
        callbacks: {
            onEpochEnd: async (epoch, logs) => {
                console.log(` Epoche: ${epoch + 1} - Verlust: ${logs.loss.toFixed(4)}`);
            }
        }
    });

    console.log(" Training abgeschlossen!");
}

runTF();