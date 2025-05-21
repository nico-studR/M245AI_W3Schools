//1.	Definiere eine Linie im Koordinatensystem, z.B. y = 1.2 * x + 50.
// 2.	Erstelle 500 zufällige Punkte im zweidimensionalen Raum (x, y).
// 3.	Weise jedem Punkt ein „Label“ zu:
// o	Wenn der Punkt über der Linie liegt: Label = 1.
// o	Wenn der Punkt unter der Linie liegt: Label = 0.
// 4.	Trainiere dein Perzeptron:
// o	Wiederhole den Trainingsvorgang 10.000 Mal.
// o	Für jeden Punkt soll das Perzeptron die Position vorhersagen und seine Gewichte anpassen, wenn die Vorhersage falsch war.
// 5.	Erzeuge neue (nicht im Training verwendete) Testpunkte.
// 6.	Teste das trainierte Perzeptron mit diesen Punkten und zähle, wie viele Vorhersagen falsch waren.