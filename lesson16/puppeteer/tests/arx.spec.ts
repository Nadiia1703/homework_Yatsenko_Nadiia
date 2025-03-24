import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

describe('Pippeteer  arx test', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({headless: false, defaultViewport: {width: 1100, height: 700}});
        context = await browser.createBrowserContext();
        page = await browser.newPage();
        await page.goto('https://arx.com.ua/store/emtpl');
    });

    /*beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await browser.newPage();
        await page.goto('https://arx.com.ua/store/emtpl');
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });*/

    after(async () => {
        await page.close();
        await context.close();
        await browser.close();
    });

    it('arx test', async () => {
        await page.waitForSelector('#plateNumber');
        await page.type('#plateNumber', 'АА1254АА');
        await page.waitForSelector('.MuiButtonBase-root');
        await page.click('button[type="button"]');
        await page.waitForSelector('div .button__label');
        const buttonLabel = await page.$eval('div .button__label', el => el.textContent);
        expect(buttonLabel).contain('Внести дані вручну');
        await page.click('div .button__label');

        //page 2
        await page.waitForSelector('#vehicleShortGroupB_vt_b5');
        await page.click('#vehicleShortGroupB_vt_b5');
        await page.waitForSelector('.mtpl-vehicle-group-component__label > span');

        const vehicleLabel = await page.$eval('.mtpl-vehicle-group-component__label > span', el => el.textContent);
        expect(vehicleLabel).contain('Легковий електромобіль');

        // Третя сторінка

        // Вибір міста
        await page.waitForSelector('.shortcut-data');
        const city = '.shortcut-data > span';
        await page.click(`${city}:nth-child(2)`);
        //await page.click('text/Одеса ');
        await page.keyboard.press('Tab');

        //Рік ТЗ
        await page.click('div[id="quotation.mtplContract.vehicle.constructionYear"]');
        await page.waitForSelector('.MuiFormControl-root.MuiTextField-root.MuiFormControl-fullWidth');
        await page.click('ul li[data-value="2018"]');
        await page.keyboard.press('Tab');

        //Рік ДН
        await page.click('div[id="quotation.mtplContract.vehicle.ownerBirthYear"]');
        await page.waitForSelector('.MuiList-root.MuiMenu-list.MuiList-padding');
        await page.click('ul li[data-value="1985"]');
        await page.keyboard.press('Tab');

        //Марка - не робить
        await page.click('div[ id="quotation.mtplContract.vehicle.brand"]');
        await page.click('#quotation.mtplContract.vehicle.brand');
        await page.waitForSelector('.MuiList-root.MuiMenu-list.MuiList-padding');
        await page.click('ul li[data-value="Audi"]');
        await page.keyboard.press('Tab');

        await page.click('button button_filled button_right-icon ');


    });

});

