async function myAsyncFunction(url) {
    const responce = await fetch(url);
    console.log('responce ', responce);

    const json = await responce.json;
    console.log('body ', json);
    return json;
}

(async () => {
    console.log('before start');

    await myAsyncFunction('https://petstore.swagger.io/v2/store/inventory');

    console.log('after start');
})();

//myAsyncFunction('https://petstore.swagger.io/v2/store/inventory');
