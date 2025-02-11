function sumArr(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

function sumArrWithoutString(arr){
    return arr.reduce((sum, current) => {
        return sum + (typeof current === 'number' ? current : 0 );
    }, 0);
}

const numArr = [1, 2, 3, 4, 5];
const stringArr = ["fsdf", "wf", "1tru", "test"];

console.log("Sum num:", sumArr(numArr));
console.log("Sun string:", sumArr(stringArr));

console.log("Sum num:", sumArrWithoutString(numArr));
console.log("Sun string:", sumArrWithoutString(stringArr));
