import { browser } from '@wdio/globals';
import { FirstPage } from './pages/first-page';
import { SecondPage } from './pages/second-page';
import { ThirdPage } from './pages/third-page';


describe('MTPL test ', () => {
    // let firstPage = FirstPage;
    let firstPage = new FirstPage();
    let secondPage = new SecondPage();
    let thirdPage = new ThirdPage();

    before(async () => {
        await browser.maximizeWindow();
        firstPage = new FirstPage();
        secondPage = new SecondPage();
        thirdPage = new ThirdPage();
    });

    it('First page - input plateNumber', async () => {
        await firstPage.open();
        await firstPage.enterPlateNumber('АА1234АВ');
        await firstPage.proceedToManualEntry();
    });

    it('Second page - select type of car', async () => {
        await secondPage.verifyCarTypes();

    });

    it('Third page - input fields', async () => {
        await thirdPage.inputfieldOfCar();
        await thirdPage.markaInput('Audi');

    });
});
