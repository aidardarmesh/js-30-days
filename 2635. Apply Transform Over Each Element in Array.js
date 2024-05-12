const fn = function(n, i) {
    return n + i;

}

var map = function(arr, fn) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }
    
    return result;
}

console.log(map([1, 2, 3], fn)); // [1, 3, 5]
