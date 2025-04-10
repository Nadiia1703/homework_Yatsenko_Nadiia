import { Given } from '@cucumber/cucumber';
import { expect } from 'playwright/test';
import { RztWorkPage } from '../pages/rzt-work.page.ts';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';

Given('Rozetka Catalog Tests', async function (this: RobotDreamsWorld){
    const catalog = new RztWorkPage(this.page);
    await catalog.goTo();
    await catalog.clickCatalogBase();

    const items = await catalog.getSummaryItems('Ноутбуки та комп’ютери', 'Ноутбуки');
    expect(items.length).toBeGreaterThan(0);

    const firstItem = await items[0].getItemDetails();
    expect(firstItem.summary).toContain('Ноутбук Acer Aspire');
    expect(firstItem.redPrice).toBeTruthy();
    expect(firstItem.oldPrice).toBeTruthy();
});
