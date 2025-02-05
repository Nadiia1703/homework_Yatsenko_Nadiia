export class sameClass {   // export можна викоритовувати в інших класах
    #privatname; // приватна зміна
    constructor(name) {// конструктор
        this.#privatname = name;
    }

    get name(){
        return this.#privatname;
    }

    set name(name){
        if (!name){
            throw new Error('Name is eerrror')
        }else{
            this.#privatname = name;
        }
    }
}

const sameClass = new sayName('Nadin');
console.log(sameClass.name)


//для set 
sameClass.name = 'Curl';  // set  змінити  name
console.log(sameClass.name); // get