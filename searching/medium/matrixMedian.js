const matrixMedian = (mat, target) => {
    const colCount = mat[0].length;
    let low = 0, high = (mat.length * mat[0].length) - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let [midi, midj] = [Math.floor(mid / colCount), Math.floor(mid % colCount)];
        let midElement = mat[midi][midj];

        if (target === midElement) {
            return true;
        } else if (target < midElement) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
}

const main = () => {
    const mat = [[1], [3]];
    const target = 3;
    console.log(binarySearchInMatrix(mat, target));
}

main();