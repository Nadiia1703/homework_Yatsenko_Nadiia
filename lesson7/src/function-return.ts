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

