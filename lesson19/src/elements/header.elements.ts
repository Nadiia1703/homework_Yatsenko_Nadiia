import { Locator } from "@playwright/test";

export class HeaderElement {
    private get buttonCatalog(): Locator {
        return this.baseLocator.locator('//button[@data-testid="fat_menu_btn"]');
    }

    private get buttonMenu(): Locator {
        return this.baseLocator.locator('//button[@data-testid="menu_button"]');
    }

    /*private get logo(): Locator {
        return this.baseLocator.locator('//a[@class="header__logo"]');
    }

    private get search(): Locator {
        return this.baseLocator.locator('//div[@class="header-search"]');
    }*/

    public constructor(private readonly baseLocator: Locator) {}

    public async clickCatalogHead(): Promise<void> {
        await this.buttonCatalog.click();
    }

    public async clickButton(): Promise<void> {
        await this.buttonMenu.click();
    }


}