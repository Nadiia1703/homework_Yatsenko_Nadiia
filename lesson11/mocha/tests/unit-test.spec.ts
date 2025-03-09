
import { expect } from 'chai';
import { getPlanetInfo } from 'src';
import { EarthPlanet } from 'src/earth-planet';
import { IPlanet } from 'src/iplanet';
import { SaturnPlanet } from 'src/saturn-palent';
import sinon from 'sinon';

describe('Unit test suit', () => {
    let consoleLogSpy: sinon.SinonSpy;

    beforeEach(() => {
        consoleLogSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('should return correct info for Earth', () => {
        const earth = new EarthPlanet('Earth', 6741);
        //Act
        const info =  earth.getInfo();
        //Assert
        expect(info).to.deep.equal('Планета: Earth, Радіус: 6741 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1');
        //Планета: Earth, Радіус: 6741 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1
    });

    it('should return correct info for Saturn', () => {
        const saturn = new SaturnPlanet('Saturn', 7854);
        //Act
        const info =  saturn.getInfo();
        //Assert
        expect(info).to.contain('Saturn');
    });

    it('should call getPlanetInfo method - using Spy', () => {
        const earth = new EarthPlanet('Earth', 6741);
        getPlanetInfo(earth);

        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith('getPlanetInfo', 'Планета: Earth, Радіус: 6741 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1')).to.be.true;
    });

    it('should call getInfo method', () => {
        const earth = new EarthPlanet('EarthTwo', 6741);
        const saturn = new SaturnPlanet('SaturnTwo', 7854);
        const planets: IPlanet[] = [earth, saturn];
        const infos = planets.map(p => p.getInfo());

        expect(infos).to.deep.equal(['Планета: EarthTwo, Радіус: 6741 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1',
            'Планета: SaturnTwo, Радіус: 7854 км Satellite: Titan, radius satellite: 2575, quantity satellites: 1,Satellite: Reya, radius satellite: 764, quantity satellites: 2'
        ]);

    });
});
