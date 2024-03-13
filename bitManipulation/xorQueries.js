const xorQueries = (arr, queries) => {
    let prefixXor = new Array(arr.length);
    let ans = new Array(queries.length);

    let prefixSoFar = 0;
    for (let i = 0; i < arr.length; i++) {
        prefixSoFar ^= arr[i];
        prefixXor[i] = prefixSoFar;
    }

    for (let i = 0; i < queries.length; i++) {
        let leftRange = queries[i][0];
        let rightRange = queries[i][1];

        if (leftRange == 0)
            ans[i] = prefixXor[rightRange];
        else
            ans[i] = prefixXor[rightRange] ^ prefixXor[leftRange - 1];
    }
    return ans;
};


const main = () => {
    let arr = [4, 8, 2, 10];
    let queries = [[2, 3], [1, 3], [0, 0], [0, 3]];
    console.log(xorQueries(arr, queries));
};

main();