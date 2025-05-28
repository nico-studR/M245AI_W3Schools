const model = tf.sequential();
model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));
model.add(tf.layers.dense({ units: 1, useBias: true }));
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
