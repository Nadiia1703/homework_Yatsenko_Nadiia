# Lesson 20 - Cucumber


To run the code, follow these steps:

1. Install the necessary dependencies:
    ```sh
    npm i
    ```

2. Install the necessary dependencies of cucumber:
    ```sh
    npm install --save-dev @cucumber/cucumber ts-node @cucumber/pretty-formatter
    ```

3.  У package.json додати:
"type": "module", і скрипт "test": "cucumber-js --config cucumber.mjs"

4. tsconfig.json в секції compillerOptions:
"module: "ESnext",
"noEmit": true,
"allowImportingTsExtensions": true,

5. Створити файл конфігурацій cucumber.mjs
export default {
 loader: ['ts-node/esm'],
 formatOptions: {
 snippetInterface: 'async-await'
 },
 import: ['src/**/*.ts'],
};

6. Створюємо необхідні директорії
● ./features — папка, в якій зберігатимуться .feature-файли
● ./src/steps — папка, в якій буде супровідний код до Gherkin-кроків

7. Створюємо вхідний файл ./src/main.ts
import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { RobotDreamsWorld } from '../worlds/robot-dreams.world';
setDefaultTimeout(999999999);
setWorldConstructor(RobotDreamsWorld);

8. Створити папку World і Кастомний World визначають таким чином:
class RobotDreamsWorld extends World {
 public contructor(options: IWorldOptions) {
 super(options)
 }
}

9. CUCUMBER.JS. НАЛАШТУВАННЯ VS CODE
В пропертях (settings) додати
{
    "git.openRepositoryInParentFolders": "always",
    "git.autofetch": true,
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
        "cucumber.features": [
        "features/**/*.feature",
        ],
        "cucumber.glue": [
        "src/steps/**/*.ts",
        ],
       
      
    "cSpell.userWords": [
        "publick",
        "temperatyre"
    ]

}

10. npm i playwright
npx playwright install --with-deps \\установити браузери

11. Створити Hooks 
для запуску браузера, контекста . сторінки 
дописати   "strictPropertyInitialization": false,      в tsconfig.json
для ініцілізації 
    public context: BrowserContext;
    public page: Page;

12. Створити файл index.ts
для послідовного запуску браузера, контекста . сторінки 


13. Створити feature  