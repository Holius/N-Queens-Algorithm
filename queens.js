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

const findPair = (row,col,array) => {
    let bool = false
    array.forEach( pair => {
        if (pair[0] === row && pair[1] === col) {
            bool = true;
        }
    })
    return bool
}

 const generateMajor = (row, col, limit) => {
    const majorEliminations = [];
    while ((row + 1 < limit) && (col + 1 < limit)) {
        majorEliminations.push([row + 1, col + 1])
        row += 1
        col += 1
    }
    return majorEliminations;
}


const generateMinor = (row, col, limit) => {
     const minorElminations = [];
     while ((row < limit) && (col - 1 > -1)) {
        minorElminations.push([row + 1, col - 1]);
        row += 1;
        col -= 1;
     }
     return minorElminations;
 }

 const generateDiagonals = (row, col, limit) => {
    const minors = generateMinor(row,col,limit);
    const majors = generateMajor(row,col,limit);
    return minors.concat(majors);
 }

function countQueenSolutions (n) {
    if (n === 0) return 1;
    let count = 0;
    const initArray = initMatrix(n);
    const limit = n;
    

    function inner (pieces, matrix, row, colA, diagonals) {
        if (pieces === limit) {
            count++
            return
        } 
        generateN(limit).forEach( col => {
            if (colA.indexOf(col) === -1) {
                if (findPair(row,col,diagonals) === false) {
                let copy = matrix.slice();
                copy[row][col] = 1;
                inner(pieces + 1, copy, row + 1, [col, ...colA], 
                     [...generateDiagonals(row, col,limit),...diagonals])
            }
          }
        })
        
    }
    for (let i = 0; i < initArray.length; i++) {
        let colA = [i];
        let diagonals = generateDiagonals(0, i, limit);
        inner(1, initArray[i], 1, colA, diagonals);
    }
    return count
}
// -------------------------- end of solution ------------------------------
const test = [];
for (i = 0; i < 9; i++) {
    test.push(countQueenSolutions(i));
}
console.log(JSON.stringify(test)) // expected [1, 1, 0, 0, 2, 10, 4, 40, 92])
