let input = [9, 20, 31, 4, 20, 320, 21, 8];

function solve2(array) {
    let arr = array.slice();
    let result = [];

    result = arr.filter((value, _, ar) => {
        if(ar[0] < value) {
            ar[0] = value;
            return ar[0];
        }
    });
    
    result.unshift(array[0]);
    return result;
}
console.log(solve2(input));
