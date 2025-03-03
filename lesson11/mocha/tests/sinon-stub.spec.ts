import { EarthPlanet } from 'src/earth-planet';
import sinon from 'ts-sinon';
import {expect} from 'chai';

describe('EarthPlanet Tests - using stub', () => {

    describe('Test with stub object instance', () => {
        it('should return correct info for Earth', () => {
            // Arrange
            const earth = new EarthPlanet('Earth', 555);
            const instance = sinon.stub(earth, 'getInfo').returns('Планета: Earth, Радіус: 555 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1');
            // Act
            const info = earth.getInfo();
            // Assert
            expect(info).to.be.equal('Планета: Earth, Радіус: 555 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1');
            expect(instance.calledOnce).to.be.true;
            expect(instance.calledWith()).to.be.true;
            expect(info).to.be.contain('Earth');
            instance.restore();
        });
    });

    describe('Test with createStubInstance', () => {
        it('should return stubbed info for Earthtwo', () => {
            // Arrange
            const instance = sinon.createStubInstance(EarthPlanet);
            instance.getInfo.returns('Планета: Earthtwo, Радіус: 999 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1');
            // Act
            const info = instance.getInfo();
            // Assert
            expect(info).to.be.equal('Планета: Earthtwo, Радіус: 999 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1');
            expect(instance.getInfo.calledOnce).to.be.true;
        });
    });
});

