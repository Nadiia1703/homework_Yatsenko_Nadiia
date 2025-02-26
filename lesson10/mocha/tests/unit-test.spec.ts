
import { expect } from 'chai';
import { EarthPlanet } from 'src/earth-planet';
import { IPlanet } from 'src/iplanet';
import { SaturnPlanet } from 'src/saturn-palent';

describe('Unit test suit', () => {
    let earth: EarthPlanet;
    let saturn: SaturnPlanet;
    beforeEach(() => {
        earth = new EarthPlanet('Earth', 6741);
        saturn = new SaturnPlanet('Saturn', 7854);
    });

    it('should return correct info for Earth', () => {
        //Act
        const info =  earth.getInfo();
        //Assert
        expect(info).to.deep.equal('Планета: Earth, Радіус: 6741 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1');
        //Планета: Earth, Радіус: 6741 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1
    });

    it('should return correct info for Saturn', () => {
        //Act
        const info =  saturn.getInfo();
        //Assert
        expect(info).to.contain('Saturn');
    });

    it('should call getInfo method', () => {
        const planets: IPlanet[] = [earth, saturn];
        const infos = planets.map(p => p.getInfo());

        expect(infos).to.deep.equal(['Планета: Earth, Радіус: 6741 км Satellite: Moon, radius satellite: 1737, quantity satellites: 1',
            'Планета: Saturn, Радіус: 7854 км Satellite: Titan, radius satellite: 2575, quantity satellites: 1,Satellite: Reya, radius satellite: 764, quantity satellites: 2'
        ]);

    });
});
