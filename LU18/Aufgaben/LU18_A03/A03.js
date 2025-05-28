
//AUFGABE
//Schreibe eine JavaScript-Funktion ermittleMatrixTyp(matrix), die prüft, ob eine gegebene quadra-tische Matrix eine der folgenden Formen hat:
// •	Identitätsmatrix
// •	Skalarmatrix
// •	Diagonalmatrix
// •	Normale quadratische Matrix (wenn keine der obigen Formen zutrifft)
// Die Funktion soll den Typ der Matrix als String zurückgeben.
function ermittleMatrixTyp(matrix) {
    const n = matrix.length;

    let istIdentitaet = true;
    let istSkalar = true;
    let istDiagonal = true;
    let skalarWert = matrix[0][0];

    //finde einen weg zu ermitteln, wie man auf die Art der Matrix prüfen kann.

    if (istIdentitaet) return "Identitätsmatrix";
    if (istSkalar) return "Skalarmatrix";
    if (istDiagonal) return "Diagonalmatrix";
    return "Normale quadratische Matrix";
}

// Tests
const m1 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
const m2 = [[3, 0, 0], [0, 3, 0], [0, 0, 3]];
const m3 = [[3, 0, 0], [0, 9, 0], [0, 0, 1]];
const m4 = [[3, 1, 0], [0, 3, 2], [0, 0, 3]];

console.log(ermittleMatrixTyp(m1));
console.log(ermittleMatrixTyp(m2));
console.log(ermittleMatrixTyp(m3));
console.log(ermittleMatrixTyp(m4));