var filter = function(arr, fn) {
    let filteredArr = [];

    arr.forEach((num, i) => {
        if (fn(num, i)) {
            filteredArr.push(num);
        }
    });

    return filteredArr;
};

console.log(filter([1, 2, 3, 4], (n, i) => n % 2 === 0)); // [2, 4]
