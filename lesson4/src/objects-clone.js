const obj1 = {
    name: 'Joe',
    surname: 'Gold',
    props: {
        age: 33,
        gender: 'male',
        'country of orirgia': 'USA'
    }
};

const obj2 = Object.assign({}, obj1); //вставити пустий елемент із обккта 1
const obj3 = {...obj1};

console.log(obj2);
console.log('------------');

obj2.name = 'ttttt';
obj3.name = 'eeeee';
obj2.props.age = 44;
obj3.props.age = 100;
console.log(obj2, obj1);
console.log('------------');
console.log(obj3, obj1);

console.log('-----obj4-------');

const obj4 = structuredClone(obj1);
obj4.name = 'maria';
obj4.props.age = 10;
console.log(obj4, obj1);

console.log('----obj5--------');

const obj5 = JSON.parse(JSON.stringify(obj1));
obj5.name = 'Caty';
obj5.props.age = 88;
console.log(obj5, obj1);

console.log (obj1 == obj2);
console.log (obj1.props === obj2.props);

console.log(typeof obj1, typeof obj1.name, typeof obj1.props.age);
