var once = function(fn) {
    let wasCalled = false;
    
    return function(...args){
        if (wasCalled) {
            return undefined;
        } else {
            wasCalled = true;
            return fn(...args);
        }
    }
};

const onceFn = once(x => x + 1);

console.log(onceFn(2)) // 3
console.log(onceFn(2)) // undefined
