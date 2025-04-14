//послідовність запусків hooks

import { browserHook } from './browser.hook.ts';
import { browserContextHook } from './browsr-context.hook.ts';
import { globalContextHook } from './global-context.hook.ts';
import { pageHook } from './page.hook.ts';

globalContextHook();
browserHook();
browserContextHook();
pageHook();
