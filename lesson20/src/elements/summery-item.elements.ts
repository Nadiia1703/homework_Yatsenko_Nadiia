import { Locator } from 'playwright';
import { ItemDetails } from '../models/item-details.pm.ts';

export class SummeryItemElement {

    private get itemText(): Locator {
        return this.baseLocator.locator('//a[contains(@class, "tile-title black-link text-base")]');

    }

    private get itemRedPrice(): Locator {
        return this.baseLocator.locator('//div[contains(@class, "price color-red")]');

    }

    private get itemOldPrice(): Locator {
        return this.baseLocator.locator('//div[contains(@class, "old-price mb-1")]');

    }

    private get itemImage(): Locator {
        return this.baseLocator.locator('//a[contains(@class, "tile-image-host")]');

    }

    public constructor(private readonly baseLocator: Locator) {}

    public async getItemDetails(): Promise<ItemDetails> {
        const summary = await this.getSummery();
        const redPrice = await this.getItemRedPrice();
        const oldPrice = await this.getItemOldPrice();
        const image = await this.getItemImage();

        return {
            summary,
            redPrice,
            oldPrice,
            image
        };
    }

    private async getSummery(): Promise<string> {
        const summery = await this.itemText.textContent();
        return summery?.trim() ?? '';
    }

    private async getItemRedPrice(): Promise<string> {
        const summery = await this.itemRedPrice.textContent();
        return summery?.trim() ?? '';
    }

    private async getItemOldPrice(): Promise<string> {
        const summery = await this.itemOldPrice.textContent();
        return summery?.trim() ?? '';
    }

    private async getItemImage(): Promise<string> {
        const summery = await this.itemImage.textContent();
        return summery?.trim() ?? '';
    }
}
