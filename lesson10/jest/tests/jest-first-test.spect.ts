//import { expect as expectChai} from 'chai';
import { describe, expect, test } from '@jest/globals';

describe('tttt', () => {
    describe('test1 ', () => {
        test('2 + 2 = 4', () => {
            expect(2 + 2).toBe(4);
        });
    });
});

describe('test2 2 + 2 <>5 ', () => {
    let sum = 0;
    test('put ', () => {
        sum = 2 + 2;
    });

    test('check 5', () => {
        expect(sum).toBe(5);
    });
});

