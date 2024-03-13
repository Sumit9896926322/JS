const singleElementInSortedArr = (arr) => {
    let low = 0;
    let high = arr.length - 1;

        while (low < high) {
            let mid = (low + high)/2;
            if( (mid % 2 === 0 && arr[mid] === arr[mid +1]) || (mid %2 === 1 && arr[mid] === arr[mid - 1]) )
                low = mid + 1;
            else
                high = mid;
        }
        return arr[low];
}

const main = () => {
    const arr = [3,3,7,7,10,11,11];
    const singleElement = singleElementInSortedArr(arr);
    console.log(singleElement);

}

main();