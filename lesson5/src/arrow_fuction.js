const doSomeJob = (name, age , job) =>{
    sayName(name);
    sayAge(age);
    sayJob(job);
};

const sayName = (name) => {
    console.log (' Hello  ' + name);
};

const sayAge = (age) => {
    console.log (' You are  ' + age);
};

const sayJob = (job) => {
    console.log (' work  ' + job);
};

doSomeJob('Nadia', 25, {role: 'QA', seniority: 'Middle'});
