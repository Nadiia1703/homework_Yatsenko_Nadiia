const fruits = ['appel', 'pear', 'lemon', 'banana'];

for(const el of fruits){
    console.log(el);
}

for(const el in fruits){
    console.log(el);
}

const num = [44, '2', 55, 6, 88, 45, 74];
for (let i=0; i<num.length; i++){
    console.log(num[i]);
}

console.log('---while---');

let i = 0;
while(i < num.length){
    console.log(num[i]);
    i++;
}

console.log('---from 100 ---');

for (let k = 100; k !=0; k = k -10){
    console.log(k);
}

console.log('---from 0 ---');

for (let l = 0; l !=10; l++){
    console.log(l);
}
