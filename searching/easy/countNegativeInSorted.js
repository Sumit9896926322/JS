const countNegativeInDecreasingArr = (arr) => {
    let low = 0;
    let high = arr.length - 1;
    let count = 0;

    if (arr[0] < 0) {
        return arr.length;
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < 0) {
            if (arr[mid - 1] < 0) {
                high = mid - 1;
            } else {
                return arr.length - mid;
            }
        } else {
            low = mid + 1;
        }
    }
    return count;
}
const countNegativeInDecreasingMat = (mat) => {
    let total = 0;
    for (let i = 0; i < mat.length; i++) {

        total += countNegativeInDecreasingArr(mat[i]);
    }
    return total;
}

const main = () => {
    const mat = [[3, -1, -3, -3, -3], [2, -2, -3, -3, -3], [1, -2, -3, -3, -3], [0, -3, -3, -3, -3]];
    countNegativeInDecreasingArr([3, -1, -3, -3, -3]);
    const totalNegative = countNegativeInDecreasingMat(mat);

}

main();