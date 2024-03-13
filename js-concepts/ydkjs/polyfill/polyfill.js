const myMap = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }
    return newArr;
}
const myFilter = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        let res = cb(this[i], i, this);
        if (res) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const myReduce = function (cb, acc) {
    let defaultValue = acc || this[0];
    for (let i = 0; i < this.length; i++) {
        defaultValue = cb(acc, this[i], i, this);
    }
    return defaultValue;
}

Array.prototype.myMap = myMap;
Array.prototype.myFilter = myFilter;
Array.prototype.myReduce = myReduce;


const mappedArray = [1, 2, 3, 4].myMap((a) => a * 2);
const filteredArray = [1, 2, 3, 4].myFilter((a) => a % 2 === 0);
const reducedSum = [1, 2, 3, 4].myReduce((acc, a) => acc + a, 0);
console.log(mappedArray, filteredArray, reducedSum);
