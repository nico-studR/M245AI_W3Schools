await model.fit(inputs, labels, {
    epochs: 50,
    callbacks: tfvis.show.fitCallbacks(
        { name: 'Training Performance' },
        ['loss'],
        { callbacks: ['onEpochEnd'] }
    )
});

// Rücktransformation
const unNormXs = inputXs.mul(inputMax.sub(inputMin)).add(inputMin);
const unNormPreds = preds.mul(labelMax.sub(labelMin)).add(labelMin);

// Visualisierung
tfvis.render.scatterplot(
    { name: 'Vorhersagen vs Original' },
    { values: [originalPoints, predictedPoints], series: ['Original', 'Predicted'] },
    {
        xLabel: 'Rooms',
        yLabel: 'Price',
        height: 300
    }
);
