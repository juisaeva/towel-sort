
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) {
        return [];
    }
    
    const newArr = [];

    matrix.forEach(function (value, i) {
    i % 2 === 0 ? newArr.push(value) : newArr.push(value.reverse());
    });

    return newArr.flat();
}


/*
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
]

должно вернуться как [1, 2, 3, 6, 5, 4, 7, 8, 9 ] => сортировка по even(с reverse)/odd и записать в новый массив
*/
