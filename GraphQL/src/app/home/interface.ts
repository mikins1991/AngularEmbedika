export interface Data {
    ships?: DataShip[];
}

export interface DataShip {
    home_port: string;
    id: string;
    model: null;
    name: string;
    type: string;
    weight_kg: number;
    __typename: string;
}
