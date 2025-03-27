import { WebDriver } from 'selenium-webdriver';
import { closeBrowserInstance, getBrowserInstance } from 'src/driver-manager';

describe('First test selenium', () => {
    let driver: WebDriver;

    before(async () => {
        driver = await getBrowserInstance();
    });

    after(async () => {
        await closeBrowserInstance(driver);
    });

    it('should open google page', async () => {
        await driver.get('https://arx.com.ua/store/emtpl');
        await driver.sleep(10000);
    });

});
