async function fetchJson(url){
    const responce = await fetch(url);
    if (!responce.ok){
        throw new Error('URL isn,t ok');
    }
    console.log('URL is ok');
    return responce.json();
}

async function checkFetch() {
    const firstService = 'https://petstore.swagger.io/v2/store/inventory';
    const secondService = 'https://petstore.swagger.io/v2/store/inventory11';

    try {
        const body = await fetchJson(secondService);
        console.log('secondService ', body.totvs);
    } catch (er){
        console.log('service does.t exist, go to second service', er.message);
        try {
            const body = await fetchJson(firstService);
            console.log('firstService ', body.totvs);
        } catch (er) {
            if (er.message !== 'URL isn,t ok'){
                throw (er);
            }
            console.log('Error', er.message);
        }
    }
}
checkFetch();
