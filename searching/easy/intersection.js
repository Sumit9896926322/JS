const getFirstIndex = (arr, low, x) => {
    let high = arr.length - 1;
    let ans = -1;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === x) {
            ans = mid;
            high = mid - 1;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

const findIntersection = (arr1, arr2) => {
    let ans = [];
    let low = 0;
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    for (const elem of arr1) {
        const searchedIndex = getFirstIndex(arr2, low, elem);
        if (searchedIndex !== -1) {
            low = searchedIndex + 1;
            ans.push(elem);
        }
    }
    return ans;
}

const main=()=>{
    const arr1 = [1,2,2,1];
    const arr2 = [2,2];

    if (arr1.length < arr2.length) {
        console.log(findIntersection(arr1, arr2));
    } else {
        console.log(findIntersection(arr2, arr1));
    }
}

main();