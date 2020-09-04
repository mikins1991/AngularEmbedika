import { DataShip } from '../interface';

export class FilterHelper {
    static getFiterData(data: DataShip[], filterPort: string[], filterType: string): DataShip[] {
        const dataFilter: DataShip[] = [];

        filterPort.forEach((item) => {
            data.forEach((elem) => {
                if (elem.home_port === item && elem.type === filterType) {
                    dataFilter.push(elem);
                }
            });
        });
        return dataFilter;
    }
}
