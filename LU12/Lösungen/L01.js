async function runTF() {
    const jsonData = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    let values = await jsonData.json();
    values = values.map(extractData).filter(removeErrors);
    console.log("Bereinigte Daten:", values);
}

function extractData(obj) {
    return {x:obj.Horsepower, y:obj.Miles_per_Gallon};
}
function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}

runTF();