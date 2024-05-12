var createHelloWorldFunction = function() {
    return function(...args) {
        return "Hello World!";
    }
};

const f = createHelloWorldFunction();
console.log(f());
