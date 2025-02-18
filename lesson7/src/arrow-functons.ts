const sunNum = (arr: (number | string)[]): undefined =>  {
    console.log('Sum number ', arr.reduce((s: number, c: number | string) => s + (typeof c === 'number' ? c : Number(c)), 0));
};

const concatStrings = (arr: (number | string)[]) : undefined =>{
    console.log ('Concat text ', arr.reduce((s: string, c: number | string) => s + (typeof c === 'string' ? c : ('')), ' '));
};

const a: (number | string)[] = [1, 3, 6, '7'];
const b: (number | string)[] = [0, '1', '3', 'test', 9];

sunNum(a);
sunNum(b);
concatStrings(a);
concatStrings(b);
