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
}

const myPtron = new Perceptron(2);
console.log("Vorhersage:", myPtron.activate([100, 200]));
