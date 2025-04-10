import { Then, When } from '@cucumber/cucumber';
import { RobotDreamsWorld } from 'src/worlds/robot-dreams.world.ts';

When('open catalog', async function (this: RobotDreamsWorld) {
    await this.rztPage.goTo();
});

Then('I should see laptop items', async function (this: RobotDreamsWorld){
    await this.rztPage.clickCatalogBase();
});


