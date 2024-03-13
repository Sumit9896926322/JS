// https://leetcode.com/problems/pascals-triangle/

const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
const nextPermutation = (arr) => {
    let i = arr.length - 1;
    while (i >= 1 && arr[i - 1] >= arr[i]) i--;

    if (i === 0)
        return arr.sort((a, b) => a - b);
    else {
        let prevElemIndex = i - 1;
        let start = i, end = arr.length - 1;

        //matching the greater element in sorted last half and replacing it
        while ((i < arr.length - 1) && arr[i] <= arr[prevElemIndex]) i++;
        swap(arr, prevElemIndex, i);
        //reversing last half
        while (start < end)
            swap(arr, start++, end--);

        return arr;
    }
}

console.log(nextPermutation([5, 1, 1]));
console.log(nextPermutation([1, 2, 3, 4, 5]));
console.log(nextPermutation([5, 4, 3, 2, 1]));
console.log(nextPermutation([2, 3, 1, 4, 5]));
console.log(nextPermutation([2, 5, 4, 3, 1]));




