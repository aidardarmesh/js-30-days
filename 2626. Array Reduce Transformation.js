var reduce = function(nums, fn, init) {
    let val = init;

    nums.forEach(num => val = fn(val, num));

    return val;
};

console.log(reduce([1, 2, 3, 4], (n, i) => n + i, 0)); // 10
