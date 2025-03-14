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
            },
            jiraApi: {
                userName: process.env.JIRA_USER_NAME ? process.env.JIRA_USER_NAME : '',
                token: process.env.JIRA_TOKEN ? process.env.JIRA_TOKEN : ''
            },
            rdApi: {
                userName: process.env.RD_USER_NAME ? process.env.RD_USER_NAME : '',
                password: process.env.RD_PASSWORD ? process.env.RD_PASSWORD : '',
                token: this._token
            }
        };
    }

    public getApiConfig(): ApiConfigDto{
        return {
            theCatsApi: {
                baseUrl: 'https://api.thecatapi.com/v1'
            },
            jira: {
                baseUrl: 'https://levkoniuk.atlassian.net/rest/api/3'
            },
            rd: {
                baseUrl: 'https://lms.academius.io/',
                loginUrl: 'https://lms.robotdreams.cc/login'
            }
        };
    }

}
