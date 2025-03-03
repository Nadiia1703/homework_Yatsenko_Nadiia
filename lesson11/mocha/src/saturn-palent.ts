import { IPlanet } from './iplanet';
import { ISatellite } from './isatellite';
import { Moon } from './moon-class';

export class SaturnPlanet implements IPlanet{
    public satellites: ISatellite[];

    public constructor(
        public name: string,
        public radius: number
    ){
        this.satellites = [
            new Moon(1, 'Titan', 2575),
            new Moon(2, 'Reya', 764)
        ];
    }

    public getInfo(): string {
        const satellitInfo = this.satellites.map(s => s.getInfo());
        return `Планета: ${this.name}, Радіус: ${this.radius} км ${satellitInfo}`;
    }
}
