const sunNum = (arr: (number | string)[]): void =>  {
    console.log('Sum number ', arr.reduce((s: number, c: number | string) => s + (typeof c === 'number' ? c : Number(c)), 0));
};

const concatStrings = (arr: (number | string)[]) : void =>{
    console.log ('Concat text ', arr.reduce((s: string, c: number | string) => s + (typeof c === 'string' ? c : ('')), ' '));
};

const a = [1, 3, 6, '7'];
const b = [0, '1', '3', 'test', 9];

sunNum(a);
sunNum(b);
concatStrings(a);
concatStrings(b);
