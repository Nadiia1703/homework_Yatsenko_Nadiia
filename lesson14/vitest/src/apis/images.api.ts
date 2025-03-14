import { IApiService } from 'src/service/interface/i-api.service';
import * as fs from 'fs';
import { ImageDto } from 'src/dto/the-cats-api';

//api object
export class ImagesApi {
    public constructor(private apiService: IApiService) {}

    public async uploadImage(imPath: string, subId?: string): Promise<[Response, ImageDto]> {
        const file = fs.readFileSync(imPath);
        const binaryFile = new File([file], 'scale.jpg', { type: 'image/jpeg'});

        const formData = new FormData();
        formData.append('file', binaryFile);
        subId ? formData.append('sub_id', subId) : null;

        const response = await this.apiService.postForm('/images/upload', formData);
        const responseJson = await response.json();

        return await [response, responseJson];
    }

    public async getMyImage(): Promise<[Response, ImageDto]> {
        const response = await this.apiService.get('/images');
        const responseJson = await response.json();

        return await [response, responseJson];
    }

    public async addBreedToImage(imageId: string, breed: string): Promise<[Response, ImageDto]> {
        const body = {
            breed_id: breed
        };

        const response = await this.apiService.post(`/images/${imageId}/breeds`, body);
        const responseJson = await response.json();

        return await [response, responseJson];
    }
}
