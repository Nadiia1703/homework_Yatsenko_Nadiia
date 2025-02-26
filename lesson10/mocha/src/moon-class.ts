import { ISatellite } from './isatellite';

export class Moon implements ISatellite {
    public constructor(
        public quantity: number,
        public name: string,
        public radius: number
    ) {}

    public getInfo(): string {
        return `Satellite: ${this.name}, radius satellite: ${this.radius}, quantity satellites: ${this.quantity}`;
    }
}
