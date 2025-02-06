const lis = [0, '100', 45, '2', 3, 'true'];
console.log(lis);
lis.pop(5);
console.log(lis);
lis.push(4, 5);
lis.push(true);
console.log(lis.join('.'));

const filteredArray = lis.filter((el) => typeof el === 'number');
console.log('filrt ' + filteredArray);

const foundElements = lis.find((elk) => typeof elk === 'string');
console.log('find '  + foundElements);

const sortArr = lis.sort();
console.log(sortArr);

const sortNumArr = lis.sort((a, b) => a - b);
console.log(sortNumArr);

const sortNumArr2 = lis.sort((a, b) => b - a);
console.log(sortNumArr2);

const conList = lis.concat([47, 89, 'concat']);
console.log('concat ' + conList);

console.log('includes ' + lis.includes(2));
console.log('includes ' + lis.includes('2'));
console.log('includes ' + lis.includes(true));

const forLis = lis.forEach(function(item, index){
    console.log( item, index);
});
forLis;


