const search = (arr, target) => {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

const swapArr = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

const minSwapsToSort = (arr) => {
    const sortedArr = [...arr].sort((a, b) => a - b);
    const map = new Map();

    arr.forEach((elem, index) => map.set(elem, index))

    let swaps = 0;

    arr.map((elem, index) => {
        if (sortedArr[index] !== elem) {
            let elemIndex = map.get(sortedArr[index]);
            swaps++;
            map.set(elem,elemIndex);
            map.set(sortedArr[index],index)
            swapArr(arr, elemIndex, index);

        }
    })
    return swaps;
}

const main = () => {
    const arr = [7, 16, 14, 17, 6, 9, 5, 3, 18];
    console.log(minSwapsToSort(arr));
}

main();