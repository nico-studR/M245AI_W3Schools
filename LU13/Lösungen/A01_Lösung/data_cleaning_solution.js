const cleanedData = carsData.map(car => ({
    x: car.Horsepower,
    y: car.Miles_per_Gallon
})).filter(car => car.x != null && car.y != null);
