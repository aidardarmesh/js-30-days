var chunk = function(arr, size) {
    const chunkedArr = [];
    let currentChunk = [];

    arr.forEach(num => {
        if (currentChunk.length == size) {
            chunkedArr.push(currentChunk);
            currentChunk = [];
        }

        currentChunk.push(num);
    });

    if (currentChunk.length > 0) {
        chunkedArr.push(currentChunk);
    }

    return chunkedArr;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]

