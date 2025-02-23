import { EarthPlanet } from './earth-planet';
import { SaturnPlanet } from './saturn-palent';

const earth = new EarthPlanet('Earth', 6741);
console.log(earth.getInfo());

const saturn = new SaturnPlanet('Saturn', 5666);
console.log(saturn.getInfo());


