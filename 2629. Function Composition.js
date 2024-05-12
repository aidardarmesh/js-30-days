var compose = function(functions) {
    return function(x) {
        if (functions.length === 0) return x;
        let input = x;

        for (i = functions.length - 1; i >= 0; i--) {
            const currFunc = functions[i];
            input = currFunc(input);
        }

        return input;
    }
};

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4)); // 65
console.log(compose([])(5)); // 5
