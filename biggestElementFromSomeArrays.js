function solve(array) {   // nai-golemiq element ot vs masivi
    let arr = [];
    arr = array.flat(1);
    return arr
        .sort((a, b) => a - b)
        .pop()
}

let result = solve([[10, 1, 4333, 8], [1000, 434, 21, 11]]);
console.log(result);
