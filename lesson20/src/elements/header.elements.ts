import { Locator } from 'playwright';

export class HeaderElement {
    private get buttonCatalog(): Locator {
        return this.baseLocator.locator('//button[@data-testid="fat_menu_btn"]');
    }

    private get buttonMenu(): Locator {
        return this.baseLocator.locator('//button[@data-testid="menu_button"]');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async clickCatalogHead(): Promise<void> {
        await this.baseLocator.waitFor({ state: 'visible' });
        await this.baseLocator.hover();
        await this.buttonCatalog.click();
    }

    public async clickButton(): Promise<void> {
        await this.buttonMenu.click();
    }


}
