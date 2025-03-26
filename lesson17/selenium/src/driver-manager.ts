
import { Browser, Builder, WebDriver } from 'selenium-webdriver';
//import chrome from 'selenium-webdriver/chrome';

export async function getBrowserInstance(): Promise<WebDriver> {
    /* const options = new chrome.Options();
    options.addArguments(`user-data-dir =${process.cwd()}/chrome-profile`);*/
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    return driver;
}

export async function closeBrowserInstance(driver: WebDriver): Promise<void> {
    await driver.close();
}
