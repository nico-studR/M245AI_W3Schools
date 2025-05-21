// TensorFlow.js importieren (nur für Node.js nötig)
const tf = require('@tensorflow/tfjs');

// Ursprünglichen Tensor erstellen
const tensor = tf.tensor1d([1, 2, 3, 4, 5, 6, 7, 8]);

// Verschiedene Umformungen (reshape)
const reshaped1 = tensor.reshape([2, 4]);
const reshaped2 = tensor.reshape([4, 2]);
const reshaped3 = tensor.reshape([8, 1]);

// Ergebnisse ausgeben
Promise.all([
    reshaped1.array(),
    reshaped2.array(),
    reshaped3.array()
]).then(([r1, r2, r3]) => {
    console.log("Reshape [2, 4]:", r1);
    console.log("Reshape [4, 2]:", r2);
    console.log("Reshape [8, 1]:", r3);
});