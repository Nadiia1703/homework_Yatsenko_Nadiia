import { expect, Locator, Page } from '@playwright/test';

export class FirstPage {
    private readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    private get plateNumber(): Locator {
        return this.page.locator('#plateNumber');
    }

    private get searchButton(): Locator {
        return this.page.locator('.MuiButtonBase-root.MuiIconButton-root');
    }

    private get nextPageButton(): Locator {
        return this.page.locator('.button__label__text');
    }

    private get searchElement(): Locator {
        return this.page.locator('.vehicle-search-view__search__title');
    }

    public async open(): Promise<void> {
        await this.page.goto('https://arx.com.ua/store/emtpl');
        await this.searchElement.waitFor();
        await expect(this.searchElement).toHaveText('Введіть номер автомобіля:');
    }

    public async enterPlateNumber(plate: string): Promise<void> {
        await this.plateNumber.fill(plate);
        await this.searchButton.click();
    }

    public async proceedToManualEntry(): Promise<void> {
        await expect(this.nextPageButton).toHaveText('Внести дані вручну');
        await this.nextPageButton.click();
    }

    private get selectTypeCar(): Locator {
        return this.page.locator('.vehicle-type-selection__selection__header');
    }

    private get TypePassengerCar (): Locator {
        return this.page.locator('#vehicleShortGroupB_vt_b');
    }

    private get TypeTruckCar (): Locator {
        return this.page.locator('#vehicleShortGroupB_vt_c');
    }

    private get vehicleTypeLabel(): Locator {
        return this.page.locator('.mtpl-vehicle-group-component__label > span');
    }


    public async selectPassengerCar(): Promise<void> {
        await this.selectTypeCar.waitFor({ state: 'visible'});
        await this.TypePassengerCar.click();
        await expect(this.vehicleTypeLabel).toHaveText('Легковий автомобіль');
    }

    public async selectTruckCar(): Promise<void> {
        await this.selectTypeCar.waitFor({ state: 'visible'});
        await this.TypeTruckCar.click();
        await expect(this.vehicleTypeLabel).toHaveText('Вантажний автомобіль');
    }

    private get dropdowns(): Locator {
        return this.page.locator('.select-one-input.maxWidthForInput');
    }

    private get brandInput(): Locator {
        return this.page.locator('input[id="quotation.mtplContract.vehicle.brand"]');
    }

    private get brandListbox(): Locator {
        return this.page.locator('[role="listbox"]');
    }

    private get button(): Locator {
        return this.page.locator('.button__label__text');
    }

    private get verifyPageFive(): Locator {
        return this.page.locator('.package-select-form__salesprogram__label');
    }


    public async inputTypePassengerCar(): Promise<void> {
        await this.dropdowns.nth(0).click();
        await this.page.locator('[data-value="B3_1"]').click();
        await expect(this.dropdowns.nth(0)).toContainText('Тип ТЗ');
    }

    public async inputTypeTruckCar(): Promise<void> {
        await this.dropdowns.nth(0).click();
        const selectCOne = this.page.locator('[data-value="C1"]');
        await selectCOne.waitFor();
        await selectCOne.click();
        await expect(this.dropdowns.nth(0)).toContainText('Тип ТЗ');
    }
    public async inputfieldOfCar(): Promise<void> {

        await this.dropdowns.nth(2).click();
        await this.page.locator('[data-value="2023"]').click();
        await expect(this.dropdowns.nth(2)).toContainText('Рік випуску ТЗ');

        await this.dropdowns.nth(3).click();
        await this.page.locator('[data-value="1999"]').click();
        await expect(this.dropdowns.nth(3)).toContainText('Рік народження власника ТЗ');
    }

    public async markaInput(marka: string): Promise<void> {
        await this.brandInput.click();
        await this.brandListbox.waitFor();
        const brandOption = this.page.locator(`[role="option"]:has-text("${marka}")`);
        await expect(brandOption).toBeVisible();
        await brandOption.click();
        await expect(this.brandInput).toHaveValue(marka);

    }

    public async inputCity(city: string): Promise<void> {
        const inCity = this.page.locator(`div.shortcut-data span:has-text("${city}")`);
        await inCity.click();
    }

    public async buttonClick(): Promise<void> {
        await this.button.click();
        await this.verifyPageFive.waitFor();
        await expect(this.verifyPageFive).toHaveText('Оберіть програму страхування:');
    }
}
