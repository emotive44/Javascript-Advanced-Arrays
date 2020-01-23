function solve(array) {
    return array
        .slice()
        .sort((a, b) => a - b)
        .slice(0,2)
        .join(' ')
}

let result = solve(['90', '30', '40']);
console.log(result);
