function generateMatrix (n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let newArray = []
    for (let x = 0; x < n; x++) {
        newArray.push(0);
        if (x === (n - 1)) matrix.push(newArray);
    }
    }
    return matrix
}

function initMatrix (n) {
    let matrix = [];
    for (i = 0; i < n; i++) {
        let newMatrix = generateMatrix(n);
        newMatrix[0][i] = 1;
        matrix.push(newMatrix);
    }
    return matrix;
}

function generateN (n) {
    const nAmount = [];
    for (i = 0; i < n; i++) {
        nAmount.push(i);
    }
    return nAmount;
}
const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

function countRookSolutions (n) {
    let count = 0;
    const initArray = initMatrix(n);
    const limit = n;
    
    function inner (pieces, matrix, row, colA) {
        if (limit === 0) return 1;
        if (pieces === limit) {
            count++
            return
        } else if (row > limit) {
            return
        } else 
        generateN(limit).forEach( col => {
            if (colA.indexOf(col) === -1) {
                let copy = clone(matrix);
                copy[row][col] = 1;
                inner(pieces + 1, copy, row + 1, [col, ...colA])
            }
        })
        
    }
    for (let i = 0; i < initArray.length; i++) {
        let colA = [i];
        inner(1, initArray[i], 1, colA);
    }
    return count
}

console.log( 
    JSON.stringify(countRookSolutions())
)
// [1, 1, 2, 6, 24, 120, 720, 5040, 40320] expected Rooks solution numbers






//[1, 1, 0, 0, 2, 10, 4, 40, 92]
