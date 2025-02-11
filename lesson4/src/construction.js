function ObjConstructor(name, props) {
    this.name = name;
    this.props = props;
    this.funs = function (){
        console.log(this.name);
    };
}

const objConst = new ObjConstructor('Constructor', {subProp: 'nasted prop'});

console.log(objConst);

//?

objConst.name = objConst.notExisting;
console.log(objConst);

objConst.name = objConst?.notExisting;
console.log(objConst);
