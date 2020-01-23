let array = ['5', '20', '31', '4', '20', '32', '21', '3'];

function solve1(array) {
    let arr = array.slice();
    let N = arr.pop();

    return arr
        .filter((_, i) => (i % N) === 0)
        .join('\n');
}
console.log(solve1(array));
