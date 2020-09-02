export interface Data {
    ships?: DataShip[];
}

export interface DataShip {
    home_port: string;
    id: string;
    model: null;
    name: string;
    type: string;
    __typename: string;
}

export interface Ship {
    ship?: DShip;
}

export interface DShip {
    home_port: string;
    id: string;
    model: null;
    name: string;
    type: string;
    weight_kg: number;
    year_built: number;
    __typename: string;
    missions: { name: string; __typename: string }[];
}
