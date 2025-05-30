function sumArr(arr: number[]): number{
    return arr.reduce((s, c) => s + (typeof c === 'number' ? c : 0), 0);
}

function sumString(arr: (string | number) []): void{
    console.log('text:', arr.reduce((s, c) => s + (typeof c === 'string' ? c : ''), ''));
}

const numArr = [1, 2, 3, 4, 5];
const stringArr = ['1', '2', '2'];
const mixArr = [1, '8', '9'];

console.log('Sum num:', sumArr(numArr));
sumString(mixArr);
sumString(stringArr);
