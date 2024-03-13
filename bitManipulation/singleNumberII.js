//https://leetcode.com/problems/total-hamming-distance/description/

const findSingleNumberInTriplets = (arr) => {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (((arr[j] >> i) & 1) > 0) {
                count++;
            }
        }
        count %= 3;
        ans |= count<<i;
    }
    return ans;
}


const main= () => {
    let arr = [-2,-2,-4,-2];
    console.log(findSingleNumberInTriplets(arr));
}

main();