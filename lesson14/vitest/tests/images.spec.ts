import { ConfigService } from 'src/service/config.service';
import { FetchApiService } from 'src/service/fetch.api';
import { describe, expect, test } from 'vitest';
import { ImagesApi } from 'src/apis/images.api';
import { VotesApi } from 'src/apis/votes.api';
import { FavoriteApi } from 'src/apis/favorite.api';


describe('The Cats API / image Test', () => {
    const configService = new ConfigService();
    const config = configService.getConfig();
    const fetchAPI = new FetchApiService(config.api.theCatsApi.baseUrl, { apiKey: config.auth.theCatsApi.apiKey});
    const imageApi = new ImagesApi(fetchAPI);
    const votesApi = new VotesApi(fetchAPI);
    const favouritesApi = new FavoriteApi(fetchAPI);

    const context:  Record<string, unknown> = {};
    describe('TestSuit: /image', () => {
        test('TestCase_1: Upload image', async () => {
            const [response, image] = await imageApi.uploadImage('artifacts/scale.jpg', 'Nadia');

            expect(response.status).toBeOneOf([200, 201]);
            expect(image.id).toBeDefined();

            context.imageId = image.id;
            context.subIdId = image.sub_id;
        });


        test('TestCase_2: Add breed to uploaded image', async () => {
            const imageId = context.imageId as string;
            if (!imageId) {
                throw new Error('imageId is missing. Did TestCase_1 fail?');
            }
            const breedId = 'bomb';
            const [response, breed] = await imageApi.addBreedToImage(imageId, breedId);

            console.log('Add breed', response.status, response.body);
            expect(response.status).toBe(200);
            expect(breed.id).toBe(breedId);

            context.breedId = breed.id;
            console.log('Added breed ID:', context.breedId);
        });

        test('TestCase_3: Get info  image', async () => {
            const imageId = context.imageId as string;
            const breedId = context.breedId as string;

            const [response, images] = await imageApi.getMyImage();

            expect(response.status).toBeOneOf([200, 201]);

            const image = images.find((im) => im.id === imageId);
            expect(image).toBeDefined();
            expect(image?.breeds[0].id).toBe(breedId);
        });


        test('TestCase_4: added vote', async () => {
            const imageId = context.imageId as string;
            const subId = context.subId as string;
            const vall = 1;

            const [response, vote] = await votesApi.addVoteToImage(imageId, subId, vall);

            expect(response.status).toBeOneOf([200, 201]);
            expect(vote.id).toBeDefined();

            context.voteId = vote.id;
        });

        test('TestCase_5: Get vote', async () => {
            const votesId = context.voteId as number;

            const [response, vote] = await votesApi.getMyVote(votesId);

            expect(response.status).toBeOneOf([200, 201]);
            expect(vote.id).toBeDefined();
        });

        test('TestCase_6: added favourites', async () => {
            const imageId = context.imageId as string;
            const subId = context.subId as string;

            const [response, favourites] = await favouritesApi.addFavoriteToImage(imageId, subId);

            expect(response.status).toBeOneOf([200, 201]);
            expect(favourites.id).toBeDefined();

            context.favouritesId = favourites.id;
        });

        test('TestCase_7: Get favourites', async () => {
            const favouritesId = context.favouritesId as string;
            const imageId = context.imageId as string;

            const [response, favourites] = await favouritesApi.getMyFavourites();

            expect(response.status).toBeOneOf([200, 201]);
            const favo = favourites.find((i) => i.id === favouritesId);
            expect(favo.id).toBeDefined();
            expect(favo?.image_id).toBe(imageId);
        });

    });
});
