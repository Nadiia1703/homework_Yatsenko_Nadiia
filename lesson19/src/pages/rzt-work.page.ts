import { expect, Locator, Page } from '@playwright/test';
import { Layoutlement } from 'src/elements/rzt-layout.elements';
import { SummeryItemElement } from 'src/elements/summery-item.elements';
import { RztBasePage } from './rzt-base.page';

export class RztWorkPage extends RztBasePage {

    private get summaryItem(): Locator {
        //return this.page.locator('.d-flex>section>rz-category-goods .item');
        return this.page.locator('//rz-category-goods//rz-product-tile');
    }

    private layoutElement: Layoutlement;


    public constructor(page: Page) {
        super(page);
        this.layoutElement = new Layoutlement(this.page.locator('.layout-content.d-flex'));
    }

    public async getSummaryItems(): Promise<SummeryItemElement[]> {
        await this.layoutElement.selectFatMenu('Ноутбуки та комп’ютери');
        await this.layoutElement.selectSubMenu('Ноутбуки');
        
        await this.summaryItem.first().waitFor({ state: 'visible'});
        const items = await this.summaryItem.all();
        return items.map(item => new SummeryItemElement(item));
    }


    public async goTo(): Promise<void> {
        await this.page.goto('https://rozetka.com.ua/ua/');
        await expect(this.page).toHaveTitle(/Інтернет-магазин ROZETKA™: офіційний сайт онлайн-гіпермаркету Розетка в Україні/);
    }

    public async clickCatalog(): Promise<void>{
        await this.page.locator('button.button--medium.button--with-icon.fat-menu').click();
        await expect(this.page.locator('.layout-content.d-flex')).toBeVisible();
    }

    
}