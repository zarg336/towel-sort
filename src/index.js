module.exports = function towelSort(matrix) {

    let matrica = [];

    if (arguments.length === 0) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let x = 0; x < matrix.length; x++) {
            matrica[i, x] = matrix[i, x];
        }
        if (i % 2 !== 0) {
            matrix[i] = matrix[i].reverse();
        }
    }

    return matrica.flat();

}
