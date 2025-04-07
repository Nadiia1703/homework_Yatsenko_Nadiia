import { Locator } from '@playwright/test';

export class MenuElement {
    private get menuText(): Locator {
        return this.baseLocator.locator('>li');
    }

   /* private get menus(): Locator {
        return this.baseLocator.locator('.sidebar-theme>li');
    }*/

    public constructor(private baseLocator: Locator) {}

    public async getMenuNames(): Promise<string[]> {
        const menuNames: string[] = [];

        const men = await this.menuText.all();

        for (const m of men) {
            const text = await m.textContent();
            menuNames.push(text?.trim() ?? '');
        }

        return menuNames;
    }

    public async selectMenu(menuName: string): Promise<void> {
        const menuNames = await this.getMenuNames();

        if (!menuNames.includes(menuName)) {
            throw new Error(`Menu with name "${menuName}" not found`)
        }

        const men = await this.menuText.all();
        await men[menuNames.indexOf(menuName)].click({force: true});

    }

    /*public async getActiveMenu(): Promise<string[]> {
        const men = await this.menus.all();

        for (const m of men) {
            const selected = m.locator('.breadcrumbs__item.breadcrumbs__item--home')
        }
    }*/
}