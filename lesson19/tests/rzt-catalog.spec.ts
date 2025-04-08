import { test, expect, Page } from '@playwright/test';
import { RztWorkPage } from 'src/pages/rzt-work.page';

test.describe('Select Item', ()=> {
  
test('Rozetka Catalog Tests', async ({ page }) => {
  const catalog = new RztWorkPage(page);
  await catalog.goTo();
  await catalog.clickCatalogBase();
  
  const items = await catalog.getSummaryItems('Ноутбуки та комп’ютери', 'Ноутбуки');
  expect(items.length).toBeGreaterThan(0);

  const firstItem = await items[0].getItemDetails();
  expect(firstItem.summary).toContain('Ноутбук Lenovo IdeaPad');
  expect(firstItem.redPrice).toBeTruthy();
  expect(firstItem.oldPrice).toBeTruthy();
  
});

})

