import { $,  browser } from '@wdio/globals';

describe('WDIO test ', () => {
    it('test login', async () => {
        await browser.url('https://axon-bugfix.arx.com.ua/auth/authorize-login');
        await $('#inputUsername').setValue('test-login');
        await $('#inputPassword').setValue('test-password');
        await $('#buttonLogin').click();
        await $('#contracts').waitForExist({timeout: 10000,  // 10 seconds timeout
            timeoutMsg: 'Contracts page did not appear after login'});
    });
});
