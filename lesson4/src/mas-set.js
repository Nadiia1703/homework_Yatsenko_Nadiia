const set = new Set();
set.add(1);
set.add(2);
set.add('N');
set.add('N');
console.log(set);

const map = new Map();
map.set('name', 'Nadin');
map.set('surname', 'Doe');
map.set('surname', 'Bole');
if(!map.has('prop')){
    map.set('prop','student');
}
console.log(map);

