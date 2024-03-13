// https://leetcode.com/problems/find-peak-element/
//find peak element in log n time
const findPeakIndex = (arr) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (mid > 0 && mid < arr.length - 1) {
            if ((arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1])) {
                return mid;
            } else if (arr[mid - 1] < arr[mid]) {
                // if mid-1 is smaller, then it's more likely that the peak element
                // will be on right hand side.
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            //checking first and last element of array separately
            if (mid === 0) {
                return arr[0] > arr[1] ? 0 : 1;
            } else {
                return arr[mid] > arr[mid - 1] ? mid : mid - 1;

            }
        }

    }
    return -1;
}

const main = () => {
    const arr = [1, 2];
    const peakElementIndex = findPeakIndex(arr);
    console.log(peakElementIndex);

}

main();