//https://leetcode.com/problems/total-hamming-distance/description/
const hammingDistance = (arr) => {
    let totalHammingDistance = 0;
    for (let i = 0; i < 32; i++) {
        let zeroesCount = 0, onesCount = 0;
        for (let num of arr) {
            //This approach is using left shift operator
            // to check whether a particular bit is set or not.
            // ( (num >> i) & 1)
            if ((num & (1 << i)) > 0)
                onesCount++;
        }
        zeroesCount = arr.length - onesCount;
        totalHammingDistance += zeroesCount * onesCount;
    }
    return totalHammingDistance;
}

const main= () => {
    let arr = [4, 14, 4];
    console.log(hammingDistance(arr));
}

main();