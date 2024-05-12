var expect = function(val) {
    return {
        toBe: (val2) => {
            if(val === val2) return true;
            else throw new Error("Not Equal");
        },
        notToBe: (val2) => {
            if(val !== val2) return true;
            else throw new Error("Equal");
        }
    }
};

console.log(expect(1).toBe(1));
console.log(expect(1).notToBe(2));
try {
    console.log(expect(1).toBe(2));
} catch(e) {
    console.log(e.message);
}
try {
    console.log(expect(1).notToBe(1));
} catch(e) {
    console.log(e.message);
}
