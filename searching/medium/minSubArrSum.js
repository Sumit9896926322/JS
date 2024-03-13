const findMinSubArraySumLength = (arr, target) => {
    //TC O(N)
    let low = 0, high = 0, sum = 0, ans = Infinity;

    while (high < arr.length) {
        sum += arr[high];
        while (sum >= target) {
            ans = Math.min(ans, ((high - low) + 1));
            sum -= arr[low];
            low++;
        }
        high++;
    }
    return ans === Infinity ? 0 : ans;
}

const findMinSubArraySumLengthBinarySearch = (arr, target) => {
    //TC O(N)
    let prefixSum = new Array(arr.length).fill(0);
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    let low = 0, high = 0, sum = 0, ans = Infinity;

    while (low <= high) {
        let mid = Math.floor((high - low) / 2);
        if (prefixSum[mid] <= target) {
            ans = Math.min(ans, (mid - low) + 1);
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans === Infinity ? 0 : ans;
}

const main = () => {
    const arr = [];
    const target = 700;
    const minSubArrLength = findMinSubArraySumLength(arr, target);
    console.log(minSubArrLength);
}

main();