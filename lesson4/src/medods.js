const obj = {
    name: "test",
    surname: 'ssss',
    func: function(){
        console.log(this.name);
    },
    funcTwo(name){
        this.name = name;
        console.log(this.name);
    }
};

console.log(obj.name);
obj.func();
obj.funcTwo('Test333');
console.log(obj.name);

