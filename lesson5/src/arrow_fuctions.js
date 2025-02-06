const sumArr = (arr) => arr.reduce((sum, current) => sum + current, 0);

const sumArrWithoutString =(arr ) => arr.reduce((sum, current) => {
    return sum + (typeof current === 'number' ? current : Number(current) );
}, 0);


const a = [1,3,6,'7'];
const b = ['1','3','rerer',9];

console.log(sumArr(a));
console.log(sumArrWithoutString(a));
console.log(sumArr(b));
console.log(sumArrWithoutString(b));
