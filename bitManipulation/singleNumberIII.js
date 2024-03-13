//https://leetcode.com/problems/single-number-iii/

//Solution
//Find the rightmost set bit, divide numbers into two groups. Each group will end up being one unique number.
const singleNumberIII = (arr) => {
    let resultantXor = 0;
    for (let num of arr) {
        resultantXor ^= num;
    }

    let rightMostBitSet = resultantXor & ~(resultantXor - 1);
    let ans1 = resultantXor, ans2 = resultantXor;
    for (let i = 0; i < arr.length; i++) {
        if ((rightMostBitSet & arr[i]) === 0) {
            ans1 ^= arr[i];
        } else {
            ans2 ^= arr[i];
        }
    }

    return [ans1, ans2];

}

const main =   () => {
    let arr = [1, 2, 1, 0, 2, 5];
    console.log(singleNumberIII(arr));
}
main();