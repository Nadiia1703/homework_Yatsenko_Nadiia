function myThrowError(){
    throw new Error('My text error');
}

function example(a, b){
    if (a == b){
        console.log('same text');
    }
    myThrowError();
}

try {
    example(6, 5);
} catch (er) {
    if (er.message !== 'My text error'){
        throw (er);
    }
    console.log('Error', er.message);
}

console.log('After try-catch');


