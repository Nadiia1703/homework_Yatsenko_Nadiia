import { expect } from 'chai';

describe('tttt', () => {
    describe('test1 ', () => {
        it('2 + 2 = 4', () => {
            expect(2 + 2).to.be.equal(4);
        });
    });
});

describe('test2 2 + 2 <>5 ', () => {
    let sum = 0;
    it('put ', () => {
        sum = 2 + 2;
    });

    it('chech 5', () => {
        expect(sum).to.be.equal(4);
    });
});

