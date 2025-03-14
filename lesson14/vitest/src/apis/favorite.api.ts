import { VoteDto } from 'src/dto/the-cats-api/votes.dto';
import { IApiService } from 'src/service/interface/i-api.service';

export class FavoriteApi {
    public constructor(private apiService: IApiService) {}

    public async addFavoriteToImage(imageId: string, subId: string): Promise<[Response, VoteDto]> {
        const body = {
            image_id: imageId,
            sub_id: subId
        };

        const response = await this.apiService.post('/favourites', body);
        const responseJson = await response.json();

        return await [response, responseJson];
    }

    public async getMyFavourites(): Promise<[Response, VoteDto]> {
        const response = await this.apiService.get('/favourites');
        const responseJson = await response.json();

        return await [response, responseJson];
    }
}
