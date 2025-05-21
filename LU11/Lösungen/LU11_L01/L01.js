// TensorFlow.js importieren (nur in Node.js notwendig)
// Um das package zu installieren -> npm install @tensorflow/tfjs in der Konsole
const tf = require('@tensorflow/tfjs');

const tensorA = tf.tensor1d([2, 4, 6]);
const tensorB = tf.tensor1d([1, 2, 3]);

const addition = tensorA.add(tensorB);
const subtraction = tensorA.sub(tensorB);
const multiplication = tensorA.mul(tensorB);
const division = tensorA.div(tensorB);


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