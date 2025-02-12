function myFetchFunction(url){
    return fetch(url)
        .then(res => {
            return res.json();
        })
        .then(body => {
            console.log(body);
            foundNumber(body);
            findTotvs(body);
        })
        .catch(body => console.log('error - resource unavailable ', body))
        .finally(() => console.log('finally'));
}

function foundNumber(text){
    const num = Object.values(text).filter(value => typeof value === 'number');
    console.log('Found number: ', num);
    return num;
}

function findTotvs(data) {
    console.log("Value of 'totvs':", data.totvs);
    return data.totvs;
}

myFetchFunction('https://petstore.swagger.io/v2/store/inventory');
myFetchFunction('https://petstore.swagger.io/v2/store/inventor15');
