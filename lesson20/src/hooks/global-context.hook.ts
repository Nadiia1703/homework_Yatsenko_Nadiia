import { AfterAll, BeforeAll } from '@cucumber/cucumber';

import { RobotDreamsWorld } from '../worlds/robot-dreams.world.ts';

export function globalContextHook(): void {
    BeforeAll(async function() {
        RobotDreamsWorld.globalContext = new Map();
    });

    AfterAll(async function(){
        await RobotDreamsWorld.browser.close();
    });

}
