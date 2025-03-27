import { WebDriver } from 'selenium-webdriver';
import { closeBrowserInstance, getBrowserInstance } from 'src/driver-manager';
import { ArxLoginPage } from 'src/pages/arx-login.page';

describe('Bugfix singIn', () => {
    let driver: WebDriver;
    let loginPage: ArxLoginPage;

    before('should open bugfix page', async () => {
        driver = await getBrowserInstance();
        loginPage = new ArxLoginPage(driver);
        await loginPage.login('test_login', 'test_password');

    });

    after(async () => {
        await closeBrowserInstance(driver);
    });

    it('should open bugfix page11', async () => {
        await driver.sleep(10000);
    });

});
