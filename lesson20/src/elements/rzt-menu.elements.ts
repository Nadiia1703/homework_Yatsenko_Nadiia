import { Locator } from 'playwright';

export class MenuElement {
    private get menuText(): Locator {
        return this.baseLocator.locator('>li');
    }

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
            throw new Error(`Menu with name "${menuName}" not found`);
        }

        const men = await this.menuText.all();
        await men[menuNames.indexOf(menuName)].click({force: true});

    }

}
