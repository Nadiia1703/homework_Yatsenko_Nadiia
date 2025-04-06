import { test, expect } from '@playwright/test';
import { FirstPage } from './pages/first-page';



test.describe('MTPL test', () => {
    let firstPage: FirstPage;

    test.beforeEach(async ({ page }) => {
        firstPage = new FirstPage(page);
        await page.setViewportSize({ width: 1024, height: 740 });
    });

    test('Create MPTL contract - PassengerCar', async () => {
        await firstPage.open();
        await expect(firstPage['plateNumber']).toBeVisible();
        await firstPage.enterPlateNumber('АА1034АВ');
        await expect(firstPage['searchButton']).toBeVisible();
        await firstPage.proceedToManualEntry();
        await firstPage.selectPassengerCar();
        await firstPage.inputTypePassengerCar();
        await firstPage.inputfieldOfCar();
        await firstPage.inputCity('Київ ');
        await firstPage.markaInput('Audi');
        await firstPage.buttonClick();
    });

    test('Create MPTL contract - Truck Car', async () => {
        await firstPage.open();
        await expect(firstPage['plateNumber']).toBeVisible();
        await firstPage.enterPlateNumber('АІ1034АВ');
        await expect(firstPage['searchButton']).toBeVisible();
        await firstPage.proceedToManualEntry();
        await firstPage.selectTruckCar();
        await firstPage.inputTypeTruckCar();
        await firstPage.inputfieldOfCar();
        await firstPage.inputCity('Харків ');
        await firstPage.markaInput('Mercedes-Benz');
        await firstPage.buttonClick();
    });
});
