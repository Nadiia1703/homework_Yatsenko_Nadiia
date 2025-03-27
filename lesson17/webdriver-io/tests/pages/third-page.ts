import { $, $$, expect } from '@wdio/globals';

export class ThirdPage {

    private get dropdowns(): ChainablePromiseElement {
        return $$('.select-one-input.maxWidthForInput');
    }

    private get citys(): ChainablePromiseElement {
        return $$('.shortcut-data > span');
    }

    private get markas(): ChainablePromiseElement {
        return $('//input[@id="quotation.mtplContract.vehicle.brand"]');
    }

    private get marka(): ChainablePromiseElement {
        return $('[role="listbox"]');
    }

    private get button(): ChainablePromiseElement {
        return $('.button__label');
    }

    private get verifyNextStep(): ChainablePromiseElement {
        return $('//button[.//span[text()="Розрахунок"]]');
    }


    public async inputfieldOfCar():  Promise<void> {
        await expect(this.dropdowns[0]).toHaveText('Тип ТЗ');
        await this.dropdowns[0].click();
        await $('[data-value="B3_1"]').click();

        await expect(this.dropdowns[2]).toHaveText('Рік випуску ТЗ');
        await this.dropdowns[2].click();
        await $('[data-value="2015"]').click();

        await expect(this.dropdowns[3]).toHaveText('Рік народження власника ТЗ');
        await this.dropdowns[3].click();
        await $('[data-value="1999"]').click();

        await expect(this.citys[0]).toHaveText('Київ');
        await this.citys[0].click();

    }

    public async markaInput(marka: string):Promise<void> {
        await this.markas.click();
        await this.markas.waitForDisplayed();
        await this.markas.setValue(marka);
        await this.marka.waitForDisplayed();
        await this.marka.click();
        await this.button.click();
        await this.verifyNextStep.waitForExist({timeout: 20000});
        //await this.verifyNextStep.toHaveText('Оберіть програму страхування:');
    }


}
