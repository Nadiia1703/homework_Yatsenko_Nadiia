import { expect, Locator, Page } from '@playwright/test';
import { Layoutlement } from 'src/elements/rzt-layout.elements';
import { SummeryItemElement } from 'src/elements/summery-item.elements';
import { RztBasePage } from './rzt-base.page';
import { HeaderElement } from 'src/elements/header.elements';

export class RztWorkPage extends RztBasePage {

    private get summaryItem(): Locator {
        return this.page.locator('//rz-category-goods//rz-product-tile');
    }

    private layoutElement: Layoutlement;
    private head: HeaderElement;


    public constructor(page: Page) {
        super(page);
        this.layoutElement = new Layoutlement(this.page.locator('.layout-content.d-flex'));
        this.head = new HeaderElement(this.page.locator('//header[@class="header"]'))
    }

    public async getSummaryItems(category: string, subCategory: string): Promise<SummeryItemElement[]> {
        await this.layoutElement.selectFatMenu(category);
        await this.layoutElement.selectSubMenu(subCategory);
        
        await this.summaryItem.first().waitFor({ state: 'visible'});
        const items = await this.summaryItem.all();
        return items.map(item => new SummeryItemElement(item));
    }


    public async goTo(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/ua/', { waitUntil: 'domcontentloaded' });
        await expect(this.page).toHaveTitle(/Інтернет-магазин ROZETKA™: офіційний сайт онлайн-гіпермаркету Розетка в Україні/);
    }

    public async clickButtonCatalog(): Promise<void> {
        await this.head.clickCatalogHead();
    }

   
}