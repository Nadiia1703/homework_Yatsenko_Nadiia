/* eslint-disable no-fallthrough */
const age = 19;

function playSwintch(){
    switch (age) {
        case (3): console.log('young');
            break;
        case (18): console.log('supper');
            break;
        case (20):console.log('old');
        default : console.log('stop');
    }
}
playSwintch();
