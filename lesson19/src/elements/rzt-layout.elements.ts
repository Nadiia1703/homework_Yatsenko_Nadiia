import { Locator } from "@playwright/test";

export class Layoutlement {
    
    private get fatMenuItems(): Locator {
        return this.baseLocator.locator('>ul.list li');
    }

    private get subMenu(): Locator {
        return this.baseLocator.locator('ul .list-content-sub-item-inner li a[data-testid="fat_menu_sub_title"]');
    }

    public constructor(private baseLocator: Locator) {}

    public async getFatMenuNames(): Promise<string[]> {
        const fatMenuNames: string[] = [];

        const menus = await this.fatMenuItems.all();

        for (const m of menus) {
            const text = await m.textContent();
            fatMenuNames.push(text?.trim() ?? '');
        }

        return fatMenuNames;
    }


    public async selectFatMenu(menuName: string): Promise<void> {
        const menuNames = await this.getFatMenuNames();

        if (!menuNames.includes(menuName)) {
            throw new Error(`Menu with name "${menuName}" not found`)
        }

        const men = await this.fatMenuItems.all();
        await men[menuNames.indexOf(menuName)].selectText({force: true});

    }


    public async getSubMenuNames(): Promise<string[]> {
        const subMenuNames: string[] = [];

        const menus = await this.subMenu.all();

        for (const m of menus) {
            const text = await m.textContent();
            subMenuNames.push(text?.trim() ?? '');
        }

        return subMenuNames;
    }

    public async selectSubMenu(menuName: string): Promise<void> {
        const menuNames = await this.getSubMenuNames();

        if (!menuNames.includes(menuName)) {
            throw new Error(`Menu with name "${menuName}" not found`)
        }

        const men = await this.subMenu.all();
        await men[menuNames.indexOf(menuName)].click({force: true});

    }

}