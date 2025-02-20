function sayHello(name: string): void {
    console.log(`Hello ${name}`);
}

sayHello('Nadia');

sayHello((5).toString());

const o = {
    name: 'Robot'
};

sayHello(o.name);

const num = 1;

let num2: number;
num2 = 2;
num2 = 3;

console.log(num, num2);

const obj = {
    a: 1,
    b: 'Hello'
};

obj.a = 3;

console.log(obj);

// типизація обекта

const obj1: Record<string, number | string> = {};
obj1.a = 'text';
obj1.b = 2;
obj1.c = '';

console.log(obj1);

const arr1 = [1, 5, 3];
console.log(arr1.sort((a, b) => b - a));

let union: 'str1' | 'str2' | 3;
union = 'str1';
union = 'str2';
//union = 3;
console.log(union);

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
console.log(StatusCodes.BadRequest);

enum carDarect {
    n = 100,
    e,
    s,
    w
}

const currentCarDerect = carDarect.n;
const currentCarDerectw = carDarect.w;
console.log(currentCarDerect);
console.log(currentCarDerectw);

const cont:Record<string, carDarect> = {
    n: carDarect.n
};

console.log(cont);

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

const con:Record<string, CardinalDirections> = {
    North: CardinalDirections.North
};

console.log(con);

