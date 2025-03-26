import { $, $$, expect } from '@wdio/globals';

export class SecondPage {

    private get typesOfCar(): ChainablePromiseElement {
        return $$('.vehicle-type-selection__selection__buttons');
    }

    private get typeB(): ChainablePromiseElement {
        return $('#vehicleShortGroupB_vt_b');
    }

    private get verifyNextStep(): ChainablePromiseElement {
        return $('.mtpl-vehicle-group-component__label');
    }


    public async verifyCarTypes():  Promise<void> {
        /* const types: string[] = [];
        const els = await this.typesOfCar;
        for (const el of els) {
            types.push(await el.getText().trim());
        }

        await expect(types).toContain('Легковий');*/

        await this.typeB.click();
        await expect(this.verifyNextStep).toHaveText('Легковий автомобіль');

    }

}
