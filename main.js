function generateMatrix (n) {
    matrix = [];
    for (let i = 0; i < n; i++) {
        let newArray = []
    for (let x = 0; x < n; x++) {
        newArray.push(0);
        if (x === (n - 1)) matrix.push(newArray);
    }
    }
    return matrix
}

console.log(generateMatrix(5));