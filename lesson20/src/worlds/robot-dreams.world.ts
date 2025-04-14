
import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { RztWorkPage } from '../pages/rzt-work.page.ts';


export class RobotDreamsWorld extends World {
    public static globalContext: Map<string, unknown>;
    public scenarioContext: Map<string, unknown>;

    public static browser: Browser;
    public context: BrowserContext;
    public page: Page;

    public get rztPage(): RztWorkPage{
        if (!this._rztPage) {
            this._rztPage = new RztWorkPage(this.page);
        }
        return this._rztPage;
    }

    //page
    private _rztPage: RztWorkPage;


    public constructor (options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map();
    }
}
