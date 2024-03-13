const getFloorElement = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] <= target) {
            if (mid === arr.length - 1 || arr[mid + 1] > target) {
                return arr[mid];
            } else {
                low = mid + 1;
            }
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const getCeilElement = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] >= target) {
            if (mid === 0 || arr[mid - 1] < target) {
                return arr[mid];
            } else {
                high = mid - 1;
            }
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

const main = () => {
    const arr = [3, 4, 4, 7, 8, 10];
    const target = 8;
    const floorElement = getFloorElement(arr, target);
    const ceilElement = getCeilElement(arr, target);

    console.log(floorElement, ceilElement);
}

main();