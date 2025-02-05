/* eslint-disable unicorn/filename-case */
function sayHello(){
    console.log('Hello word');
}

function doSomeJob(name, age, jobCallback){
    sayName(name);
    sayAge(age);
    jobCallback();
}

function sayName(name) {
    console.log (' Hello  ' + name);
}

function sayAge(age) {
    console.log (' You are  ' + age);
}
function sayJob(job) {
    console.log (' work  ' + job);
}
sayHello();
doSomeJob('Nadia', 25, () => sayJob('QA'));

console.log('-----------------------');

doSomeJob('Ivan', 25, () => console.log('ffdsfsdfsdf'));
