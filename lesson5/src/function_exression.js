const doSomeJob = function(name, age , job){
    sayName(name);
    sayAge(age);
    sayJob(job);
};

const sayName = function(name) {
    console.log (' Hello  ' + name);
};

const sayAge = function(age) {
    console.log (' You are  ' + age);
};

const sayJob = function(job) {
    console.log (' work  ' + job);
};

doSomeJob('Nadia', 25, {role: 'QA', seniority: 'Middle'});
