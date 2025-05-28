function ermittleMatrixTyp(matrix) {
    const n = matrix.length;

    let istIdentitaet = true;
    let istSkalar = true;
    let istDiagonal = true;
    let skalarWert = matrix[0][0];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const val = matrix[i][j];

            if (i === j) {
                if (val !== 1) istIdentitaet = false;
                if (val !== skalarWert) istSkalar = false;
            } else {
                if (val !== 0) {
                    istIdentitaet = false;
                    istSkalar = false;
                    istDiagonal = false;
                }
            }
        }
    }

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