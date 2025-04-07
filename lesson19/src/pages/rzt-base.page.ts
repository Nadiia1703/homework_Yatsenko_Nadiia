import { expect, Page } from "@playwright/test";
import { HeaderElement } from "src/elements/header.elements";

export class RztBasePage {
    private readonly header: HeaderElement;

    public constructor(protected readonly page: Page) {
        this.page = page;
        this.header = new HeaderElement(this.page.locator('//header[@class="header"]'))
    }

    public async clickCatalogBase(): Promise<void>{
        await this.header.clickCatalogHead();
        await expect(this.page.locator('.layout-content.d-flex')).toBeVisible();
    }    

}