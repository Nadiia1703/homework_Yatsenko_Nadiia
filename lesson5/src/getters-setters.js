class sameClass {
    #privateName;
    constructor(name) {
        this.#privateName = name;
    }

    get name(){
        return this.#privateName;
    }

    set name(name){
        if (name.length < 4){
            console.log('Name is short');
            return;
        } else {
            this.#privateName = name;
        }
    }
    get fullName(){
        return this.#privateName + ' Doe';
    }
    get fullNameGetter(){
        return this.#privateName + ' FOL';
    }
}

const myClass = new sameClass('Nadia');
console.log(myClass.name);
console.log(myClass.fullName);

myClass.name = 'Bor';
console.log(myClass.name);
console.log(myClass.fullNameGetter);


function yourBirthday(name, birthday){
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, 'age', {
        get(){
            const todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

const Stud = new yourBirthday('Nadia', new Date(2000, 1, 1));
console.log(Stud);
console.log(Stud.age);
