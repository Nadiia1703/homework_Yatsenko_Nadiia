export abstract class Vehicle {
    public marka: string;
    public model: string;
    public year: number;
    public type: string;

    public constructor(marka: string, model: string, year: number, type: string) {
        this.marka = marka;
        this.model = model;
        this.year = year;
        this.type = type;
    }

    public showVehicle(): void {
        console.log(`${this.marka} ${this.model} ${this.year} ${this.type}`);
    }

    public abstract calcTariff(): number;
}

export class CarTariffOld extends Vehicle {
    public constructor(marka: string, model: string, year: number, type: string) {
        super(marka, model, year, type);
    }

    public calcTariff(): number {
        const basePr = 100;
        let k = 0;

        switch (this.type) {
            case 'A': k = 1;
                break;
            case 'B': k = 2;
                break;
            case 'C': k = 3;
                break;
            default:
                console.warn(`Unknown type: ${this.type}. Using default coefficient.`);
                k = 0;
        }

        return basePr * k;
    }
}

export class CarTariffNew extends Vehicle {
    public constructor(marka: string, model: string, year: number, type: string) {
        super(marka, model, year, type);
    }

    public calcTariff(): number {
        const basePr = 100;
        let k = 0;

        switch (this.type) {
            case 'A': k = 10;
                break;
            case 'B': k = 50;
                break;
            case 'C': k = 30;
                break;
            default:
                console.warn(`Unknown type: ${this.type}. Using default coefficient.`);
                k = 0;
        }

        return basePr * k;
    }
}

