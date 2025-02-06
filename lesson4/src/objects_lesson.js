const obj1 = {
    name: 'Joe',
    surname: 'Gold',
    props: {
        age: 33,
        gender: 'male',
        'country of orirgia': 'USA'
    }
};

let obj2 = {};
obj2 = obj1;

obj2.name = 'Nadin';
obj1.name = 'Nadin33';
obj2.surname = 'Green';
obj2['new field'] = 'new value';

console.log(obj2 === obj1);
console.log('-------');
console.log(obj1, obj2);
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.values(obj1.props));
console.log(Object.entries(obj1));
