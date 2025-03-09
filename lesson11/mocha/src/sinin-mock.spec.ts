import { EarthPlanet } from 'src/earth-planet';
import { expect } from 'chai';
import sinon from 'sinon';

describe('EarthPlanet Tests with Mocks', () => {
    it('using mock', () => {
        // Arrange
        const earth = new EarthPlanet('Earth', 556);
        const mock = sinon.mock(earth);

        mock.expects('getInfo').once().returns('Planet: Earth, radius 556 km');

        // Act
        const info = earth.getInfo();

        // Assert
        expect(info).to.be.equal('Planet: Earth, radius 556 km');
        mock.verify();
        mock.restore();
    });
});
