const obj = {
    name: "test",
    surname: 'ssss',
    func: function(){
        console.log(this.surname);
    },
    funcTwo(name){
        this.name = name;
        console.log(this.name);
        this.func();
    },
    nast: {
        prop: 'value',
        funNext() {
            console.log(this.prop);
        }
    }
};

console.log(obj.name);
obj.func();
obj.funcTwo('Test333');
console.log(obj.name);
console.log(obj.nast.funNext());
