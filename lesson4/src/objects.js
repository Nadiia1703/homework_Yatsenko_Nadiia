function StudentList(name, surname, lesson){
    this.name = name;
    this.surname = surname;
    this.lesson = lesson;
    this.sayHi = function(){
        console.log ('Hello  ' + this.name + ' ' + this.surname);
        console.log ('your lesson:' + this.lesson);
    };
}

const obj1 = new StudentList("Teresa", "Green", {sublesson: 'objects, cycles'});
obj1.name = 'Maria';
obj1.sayHi();
console.log(obj1);

function Calculator(a, b){
    this.a = a;
    this.b = b;
    this.sum = function (){
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    };
    this.dev = function(){
        return this.a / this.b;
    };
    this.min = function(){
        return this.a - this.b;
    };
}

const calc = new Calculator(2, 5);
console.log('SUM: ' + calc.sum());
console.log('Minus: ' + calc.min());
console.log('Mul: ' + calc.mul());
console.log('Dev: ' + calc.dev());
