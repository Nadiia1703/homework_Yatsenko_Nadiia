
import { PactV3, Verifier} from '@pact-foundation/pact';
import { expect } from 'chai';
import path from 'path';
//import * as path from 'path';
import { PetService } from 'src/service/pets.service';


describe('Pact v3 Pet service Consumer Test', () => {
    let petService: PetService;

    //Створюємо надавача шляхом формування контракту:
    const provider = new PactV3({
        consumer: 'pet-consumer-v3',
        provider: 'pet-provider-v3'
    });

    const petBody = {
        id: 1112, // Фіксований ID
        category: {
            id: 10,
            name: 'test'
        },
        name: 'doggie',
        photoUrls: ['string'],
        tags: [
            {
                id: 20,
                name: 'string'
            },
            {
                id: 40,
                name: 'string3'
            }
        ],
        status: 'available'
    };


    // Створюємо тіло контракту (опис тесту - асинхрон не потрібно - використання моку)
    describe('consumer test using Pact v3', () => {
        it('add a new pet to the store', () => {
            return provider
                .given('New Pet added')
                .uponReceiving('A request to add Pet')
                .withRequest({
                    method: 'POST',
                    path: '/v2/pet',
                    headers: {
                        accept: 'application/json'
                    },
                    body: petBody
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: petBody
                });
        });
        //Запускаємо тест, який створює файл контракту і перевіряє споживача
        it('Run Pet Service Consumer test', () => {
            // Act: Виконуємо запит до мок-сервера
            provider.executeTest(async (mockPetService) => {
                petService = new PetService(mockPetService.url);
                const response = await petService.newPet(petBody);
                // Assert
                expect(response).to.deep.equal(petBody);
            });
        });
    });

});
describe('PactV3 PetsStore Provider Verification', () => {
    it('validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/pet-consumer-v3-pet-provider-v3.json')]
        })
            .verifyProvider()
            .then(() => {
                console.log('Pact Verification Complete!');
            });
    });
});
