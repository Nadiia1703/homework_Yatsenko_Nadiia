function returnSmth(param: string | number): unknown {
    return param;
}

console.log(returnSmth('ddd'));
console.log(returnSmth(5));

function getNumber(a: number): void{
    console.log(a);
}

function getString(a: string): void{
    console.log(a);
}

getNumber(44);
getNumber(returnSmth(6) as number);

getString('tesxt');
getString(returnSmth('Halo') as string);

function sumArr(arr: number[]): number { 
    return arr.reduce((sum, current) => sum + current, 0);
}

function sumArrWithoutString(arr: (number | string)[]): number {
    return arr.reduce((sum, current) => {
        return sum + (typeof current === 'number' ? current : 0);
    }, 0);
}

const numArr: number[] = [1, 2, 3, 4, 5];
const stringArr: string[] = ["fsdf", "wf", "1tru", "test"];

console.log("Sum num:", sumArr(numArr));
// console.log("Sun string:", sumArr(stringArr)); // ❌ Помилка: sumArr приймає лише number[]

console.log("Sum num:", sumArrWithoutString(numArr));
console.log("Sun string:", sumArrWithoutString(stringArr));
