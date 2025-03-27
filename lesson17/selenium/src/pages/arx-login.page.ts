import { By, until, WebDriver, WebElementPromise } from 'selenium-webdriver';

export class ArxLoginPage {
    //private singInSelector = '#.box-card';
    private loginInput = this.driver.findElement(By.id('inputUsername'));
    private passwordInput = this.driver.findElement(By.id('inputPassword'));
    private clickButton = this.driver.findElement(By.id('buttonLogin'));
    private logo =  this.driver.wait(until.elementLocated(By.className('header__logo')), 200000);


    private get singInButton(): WebElementPromise {
        return this.driver.wait(until.elementLocated(By.className('box-card')));
    }

    public constructor(private driver: WebDriver) {}

    public async goto(): Promise<void> {
        await this.driver.get('https://axon-bugfix.arx.com.ua/auth/authorize-login');
        /*const button = await this.singInButton;
        await this.driver.wait(until.elementIsEnabled(button), 10000);*/
    }

    public async login(username: string, password: string): Promise<void> {
        await this.goto();
        await this.loginInput.sendKeys(username);
        await this.passwordInput.sendKeys(password);
        await this.clickButton.click();
        await this.logo;
    }
}
