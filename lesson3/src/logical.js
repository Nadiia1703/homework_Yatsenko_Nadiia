const b1 = false;
const b2 = true;
const c = null;

if ( c || b1 || b2) {
    console.log ('if worked');
}else {
    console.log ('else worked');
}
console.log ('--------');

if ( b1 && b2) {
    console.log ('if worked');
}else {
    console.log ('else worked');
}

console.log ('--------');

console.log(b1 && b2 ? 'if worked' : 'else worked');

console.log ('--------');

const a1 = 3;
const a2 = 2;
console.log( a1 > a2  ? 'a1 >' : 'a2 >');
