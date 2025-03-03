import { EarthPlanet } from './earth-planet';
import { IPlanet } from './iplanet';
import { SaturnPlanet } from './saturn-palent';

const earth = new EarthPlanet('Earth', 6741);
//console.log(earth.getInfo());

const saturn = new SaturnPlanet('Saturn', 5666);
//console.log(saturn.getInfo());

const venera = new SaturnPlanet('Venera', 5666);
//console.log(venera.getInfo());

export function getPlanetInfo(planet: IPlanet): void {
    console.log('getPlanetInfo', planet.getInfo());
}

getPlanetInfo(earth);
getPlanetInfo(saturn);
getPlanetInfo(venera);


