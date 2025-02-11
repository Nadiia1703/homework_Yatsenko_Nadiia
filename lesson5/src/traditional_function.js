/* eslint-disable unicorn/filename-case */
function sayHello(){
    console.log('Hello word');
}

function doSomeJob(name, age, job = {role: 'Unemployed'}){
    sayName(name);
    sayAge(age);
    sayJob(job);
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
doSomeJob('Nadia', 25, {role: 'QA', seniority: 'Middle'});

console.log('-----------------------');
doSomeJob('Ivan', 25);
