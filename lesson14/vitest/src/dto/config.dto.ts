export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theCatsApi: TheCatsApiAuthConfigDto;
    jiraApi: JiraAuthConfigDto;
    rdApi: RDAuthConfigDto;
}

export interface TheCatsApiAuthConfigDto {
    apiKey: string;
}

export interface JiraAuthConfigDto {
    userName: string;
    token: string;
}

export interface RDAuthConfigDto {
    userName: string;
    password: string;
    token?: string;
}

export interface ApiConfigDto {
    theCatsApi: TheCatsApiConfigDto;
    jira: JiraApiConfigDto;
    rd: RDConfigDto;
}

export interface JiraApiConfigDto {
    baseUrl: string;
}

export interface RDConfigDto {
    baseUrl: string;
    loginUrl: string;
}

export interface TheCatsApiConfigDto {
    baseUrl: string;
}
