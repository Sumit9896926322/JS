const flattenArray = (idx, arr, res) => {
    console.log(idx,res)
    if (idx === arr.length) {
        return res;
    }
    let currElem = arr[idx];
    if (Array.isArray(currElem)) {
        currElem.forEach(elem => {
            let prevArr = elem;
            while (Array.isArray(elem)) {
                pevArr = elem;
                elem = elem.find(e => Array.isArray(e));
            }
            if (prevArr.length) {
                res.push(...prevArr);
            } else {
                res.push(prevArr);
            }
        })
    } else {
        res.push(currElem);
    }

    flattenArray(idx + 1, arr, res);
}

const arr = [0, [1], [[1, 2], [3, 4], [5, 6, 7, [[8]], 9]], [[[[10]]]]];
console.log(flattenArray(0, arr, []));