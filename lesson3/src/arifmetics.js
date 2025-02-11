function playTypeNumber(){
    const a = Number(`100`);
    const b = Number(`a`); //NaN
    const d = Number(`1234a`); //NaN
    const f = Number(true); //1

    console.log(a, b, d, f+a);

    console.log('math');

    const n = Number(`123`);
    const v = 4;

    console.log(n+v);
    console.log(n % v);
    console.log(2 ** 3);
    console.log(4 ** (1/2));
}

function playTypeString(){
    const s1 = String(1);
    const s2 = String(true);
    const s3 = String(null);
    const s4 = String(undefined);
    const s5 = JSON.stringify({
        name: 'Nadin',
        type: 'student'
    });

    console.log(s1, s2 , s3, s4, s5, s1+s2);

    const s6= String('firsr');
    const s7= String('Secont');
    console.log(s6 +'__' + s7);

    console.log('---------------------');

    const john = {
        name: "John",
        sayHi: function() {
            alert("Hello, frend!");
        }
    };

    console.log(john);

    console.log('---------------------');

    const a1 = 2;
    const a2 = 4;
    const a3 = `2`;
    console.log(a1 == a2, a1 != a2, a1 < a2, a1 > a2);
    console.log(a1 == a3, a1 === a3);

    console.log('---------------------');
    const str1 = "hello\nWork";
    console.log(str1);

    console.log('---------------------');

    const numA = Number(2);
    const strA = String(`33`);

    console.log ('number + string  ' + numA + strA);
}

function numberForBinary(){
    const num = 248;
    console.log('Binary: ' + num.toString(2));
    console.log('Binary16: ' + num.toString(16));

}

function numberRouding() {
    const v = 125.6666;
    console.log('numberRouding ' + v.toFixed(1));

}

playTypeNumber();
console.log('******');
playTypeString();
console.log('******');
numberForBinary();
console.log('******');
numberRouding();
