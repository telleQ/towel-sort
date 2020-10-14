// You should implement your task here.
module.exports = function towelSort(matrix) {
    //*если массив пустой или без параметров
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    };
    //*если длина массива = 2
    if (matrix.length === 2) {
        //через цикл пока не вышло, пока работает но только до 4 по длине массива
        // let i = 0;
        // let arr1 = matrix[i];
        // let arr2;
        // for (i = 1; i < matrix.length; i += 2) {  
        //     arr2 = matrix[i].reverse();
        // };
        let arr1 = matrix[0];
        let arr2 = matrix[1].reverse();
        return arr1.concat(arr2);
    };
    //*если длина массива = 3
    if (matrix.length === 3) {
        let arr1 = matrix[0];
        let arr2 = matrix[1].reverse();
        let arr3 = matrix[2];
        return arr1.concat(arr2, arr3);
    };
    //*если длина массива = 4
    if (matrix.length === 4) {
        let arr1 = matrix[0];
        let arr2 = matrix[1].reverse();
        let arr3 = matrix[2];
        let arr4 = matrix[3].reverse();
        return arr1.concat(arr2, arr3, arr4);
    };
};
