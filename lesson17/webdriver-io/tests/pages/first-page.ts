import { $, browser, expect } from '@wdio/globals';

export class FirstPage {

    private get plateNumber(): ChainablePromiseElement {
        return $('#plateNumber');
    }

    private get searchButton(): ChainablePromiseElement {
        return $('.MuiButtonBase-root.MuiIconButton-root');
    }

    private get nextPageButton(): ChainablePromiseElement {
        return $('.button__label__text');
    }

    private get searchElement(): ChainablePromiseElement {
        return $('.vehicle-search-view__search__title');
    }

    public async open():  Promise<void> {
        await browser.url('https://arx.com.ua/store/emtpl');
        await expect(this.searchElement).toHaveText('Введіть номер автомобіля:');
    }

    public async enterPlateNumber(plate: string):  Promise<void> {
        await this.plateNumber.setValue(plate);
        await this.searchButton.click();
    }

    public async proceedToManualEntry():  Promise<void> {
        await expect(this.nextPageButton).toHaveText('ВНЕСТИ ДАНІ ВРУЧНУ');
        await this.nextPageButton.click();
    }
}
