function Trainer(xArray, yArray) {
    this.xArr = xArray;
    this.yArr = yArray;
    this.points = this.xArr.length;
    this.learnc = 0.00001;
    this.weight = 0;
    this.bias = 1;
    this.cost;
}

Trainer.costError = function() {
    total = 0;
    for (let i = 0; i < this.points; i++) {
        total += (this.yArr[i] - (this.weight * this.xArr[i] + this.bias)) **2;
    }
    return total / this.points;
}