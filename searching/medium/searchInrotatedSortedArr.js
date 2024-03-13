const searchRecursive = (arr, target, low, high) => {
    if (low > high) {
        return -1;
    }
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] >= arr[low]) {
        if (target >= arr[low] && target <= arr[mid]) {
            return searchRecursive(arr, target, low, mid - 1);
        } else {
            return searchRecursive(arr, target, mid + 1, high);
        }
    } else {
        if (target >= arr[mid] && target <= arr[high]) {
            return searchRecursive(arr, target, mid + 1, high);
        } else {
            return searchRecursive(arr, target, low, mid - 1);
        }
    }

}

const searchInRotatedWithDuplicates = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if ((low !== mid && arr[low] === arr[mid]) && (mid != high && arr[mid] === arr[high])) {
            low++;
            high--;
            continue;
        }

        if (arr[mid] === target) {
            return true;
        }
        if (arr[mid] > arr[low]) {
            if (target >= arr[low] && target <= arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (target >= arr[mid] && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return false;
}


const main = () => {
    const arr1 = [1, 0, 1, 1, 1];
    const target = 0;
    const isFound = searchInRotatedWithDuplicates(arr1, target);
    console.log(isFound);

}

main();