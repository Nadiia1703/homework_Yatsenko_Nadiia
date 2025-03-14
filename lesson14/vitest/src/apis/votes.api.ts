import { VoteDto } from 'src/dto/the-cats-api/votes.dto';
import { IApiService } from 'src/service/interface/i-api.service';

export class VotesApi {
    public constructor(private apiService: IApiService) {}

    public async addBreedToImage(imageId: string, subId: string, val: number): Promise<[Response, VoteDto]> {
        const body = {
            image_id: imageId,
            sub_id: subId,
            value: val
        };

        const response = await this.apiService.post('/votes', body);
        const responseJson = await response.json();

        return await [response, responseJson];
    }

    public async getMyVote(voteId: number): Promise<[Response, VoteDto]> {
        const response = await this.apiService.get(`/votes/${voteId}`);
        const responseJson = await response.json();

        return await [response, responseJson];
    }
}
