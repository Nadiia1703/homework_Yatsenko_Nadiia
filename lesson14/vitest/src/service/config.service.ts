import * as dotenv from 'dotenv-safe';
import { ApiConfigDto, AuthConfigDto, ConfigDto } from 'src/dto/config.dto';


export class ConfigService {
    private _token: string | undefined;

    public constructor(){
        dotenv.config();
    }

    public getConfig(): ConfigDto {
        const authConfig = this.getAuthConfig();
        const apiConfig = this.getApiConfig();

        return {
            auth: authConfig,
            api: apiConfig
        };
    }

    private getAuthConfig(): AuthConfigDto {
        return {
            theCatsApi: {
                apiKey: process.env.THE_CATS_API_KEY ? process.env.THE_CATS_API_KEY : ''
            }
        };
    }

    public getApiConfig(): ApiConfigDto{
        return {
            theCatsApi: {
                baseUrl: 'https://api.thecatapi.com/v1'
            }
        };
    }

}
