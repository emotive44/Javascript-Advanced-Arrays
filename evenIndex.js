function solve(array) {

    return array
        .filter((_, i) => i % 2 === 0)
        .join(' ');
}

let result = solve(['10', '30', '40']);
console.log(result);
