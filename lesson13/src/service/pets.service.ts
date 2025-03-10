import axios, { AxiosPromise } from 'axios';
import { PetDto } from 'src/models/pets.dto';


export class PetService {
    private _headers = {
        accept: 'application/json'
    };

    public constructor(private _baseUrl: string) {}

    public newPet = (pet: PetDto): AxiosPromise => {
        return axios.request({
            baseURL: this._baseUrl,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            url: '/v2/pet',
            data: pet
        });
    };
}
