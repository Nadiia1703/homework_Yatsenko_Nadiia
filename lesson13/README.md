***Homework lesson13***
**1. Написати інтеграційні тести, які покриють зв’язки між images, votes та favourites модулями, за допомогою будь-якого засобу для API-тестування.**

*файл колекція  tests/R_B_TheCatAPI.postman_collection.json - реалізовано в Postman*
*інтеграція між сервісами /images/upload / /votes / /favourite*
*через /images/upload додання нового об'єкта*
*/votes - голосування по новому об'єкту*
*/favourite - додання до улюблених нового об'єкта*
*запити GET /votes/{{votesid}}  та /favourites -перевіряють успішність запитів POST*

**2. Написати контрактні тести з погляду споживача-надавача для API https://petstore.swagger.io/ (будь-який ендпоінт)**
*тест  pet-pact-v3.spec**
*запуск тесту -із директорії lesson13 -виконати команду  npm run test*