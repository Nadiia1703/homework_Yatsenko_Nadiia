export interface Results {
    result: Ship[];
    info: {
        info1: string;
    };
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

interface Position {
    latitude: number | null;
    longitude: number | null;
}

interface Mission {
    name: string;
    flight: number;
}


const urlTest = 'https://api.spacexdata.com/v3/ships';

export async function getMyJson(): Promise<Results> {
    const response = await fetch(urlTest);
    const ships = await response.json() as Ship[];
    return {
        result: ships,
        info: {info1: ''}
    };
}

