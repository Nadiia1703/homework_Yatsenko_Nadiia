export class ResultsClass {
    public  _ship: string;

    public get ship(): string{
        return this._ship;
    }

    public set ship(ship) {
        this._ship = ship;
    }

    public result: Partial<Ship>[] = [];
    protected info: Partial<{
        info1: string;
    }> = {};

    public constructor(ship: string, results: Ship[]) {
        this._ship = ship;
        this.result = results;
    }

    public sayHello(): string {
        console.log(this._ship);
        return this._ship;
    }


}
export interface Ship {
    ship_id: string;
    ship_name: string;
    ship_model?: string;
    ship_type: string;
    roles: string[];
    active: boolean;
    imo?: number;
    mmsi?: number;
    abs: number | null;
    class: string | null;
    weight_lbs: number | null;
    weight_kg: number | null;
    year_built: number | null;
    home_port: string;
    status: string;
    speed_kn: number | null;
    course_deg: number | null;
    position: Position[];
    successful_landings: number | null;
    attempted_landings: number | null;
    missions: Mission[];
    url: string;
    image: string | null;
}

export interface Position {
    latitude: number | null;
    longitude: number | null;
}

export interface Mission {
    name: string;
    flight: number;
}

export class SummaryWeightOfShips{
    public infos:  {
        ship_id: string;
        ship_name: string;
        ship_type: string;
        status: string;
    }[] = [];
    public totalWeightKg: number;
    public constructor(resultObj: ResultsClass){
        this.infos = resultObj.result.map(_ship => ({
            ship_id: _ship.ship_id || 'Unknown',
            ship_name: _ship.ship_name || 'Unknown',
            ship_type: _ship.ship_type || 'Unknown',
            status: _ship.status || 'Unknown'
        }));

        this.totalWeightKg = resultObj.result.reduce((s, _ship) => s + (_ship.weight_kg || 0), 0);
    }

/*public summeryShip: void {
        console.log(this.totalWeightKg);
        console.log(this.infos);
    }*/
}

