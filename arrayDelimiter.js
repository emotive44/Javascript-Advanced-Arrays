let a = ['da', 'ne', 'dali', '-'];

function solve(array) {
    let arr = array.slice();
    let delimiter = arr.pop();
    return arr.join(delimiter);
}
console.log(solve(a));
