import { IPlanet } from './iplanet';
import { ISatellite } from './isatellite';
import { Moon } from './moon-class';

export class EarthPlanet implements IPlanet {
    public satellites: ISatellite[];

    public constructor(
        public name: string,
        public radius: number
    ) {
        this.satellites = [new Moon(1, 'Moon', 1737)];
    }

    public getInfo(): string {
        const satellitInfo = this.satellites.map(s => s.getInfo());
        return `Планета: ${this.name}, Радіус: ${this.radius} км ${satellitInfo}`;
    }
}
