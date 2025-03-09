import { IPlanet } from 'src/iplanet';
import sinon from 'sinon';
import { expect } from 'chai';
import { getPlanetInfo } from 'src';

describe('Mock unit test for class and function', () => {
    let mockPlanet: sinon.SinonStubbedInstance<IPlanet>;
    let consoleLogSpy: sinon.SinonSpy;

    beforeEach(() => {
        mockPlanet = {
            getInfo: sinon.stub().returns('Planet Mars, radius 7855 km')
        } as unknown as sinon.SinonStubbedInstance<IPlanet>;

        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('call getInfo about Mars - using mock', () => {
        // Act
        getPlanetInfo(mockPlanet);

        // Assert
        expect(mockPlanet.getInfo.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('getPlanetInfo', 'Planet Mars, radius 7855 km')).to.be.true;
    });
});
