// https://leetcode.com/problems/pascals-triangle/
const recursivePascal = (num) => {
    if(num === 0){
        return [[1]];
    }
    const res = recursivePascal(num-1);
    const prevRow = res[num-1];
    const currRow = [];
    for(let j=0;j<=num;j++){
        if((j === 0 )|| (j===num))
            currRow.push(1);
        else{
            let prevRowSum = prevRow[j-1]+prevRow[j];
            currRow.push(prevRowSum);
        }
    }

    res.push(currRow);
    return res;
}
const iterativePascal = (numRows)=>{
    for(let i = 0;i<numRows;i++){
       const rowArr=[];
       for(let j=0;j<=i;j++){
            if((j === 0 )|| (j===i))
                rowArr.push(1);
            else{
               let prevRow = res[i-1];
               let prevRowSum = prevRow[j-1]+prevRow[j];
               rowArr.push(prevRowSum);
            }
       }
       res.push(rowArr);
    }
}
recursivePascal(5);