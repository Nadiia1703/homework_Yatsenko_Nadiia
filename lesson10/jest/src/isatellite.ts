export interface ISatellite {
    quantity: number;
    name: string;
    radius: number;

    getInfo(): string;
}
