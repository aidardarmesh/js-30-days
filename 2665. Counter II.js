var createCounter = function(init) {
    let val = init;
    return {
        increment: () => ++val,
        decrement: () => --val,
        reset: () => val = init
    };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
