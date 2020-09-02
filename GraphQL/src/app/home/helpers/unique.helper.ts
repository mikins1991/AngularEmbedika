import { DataShip } from '../interface';

export class UniqueHelper {
    static getUniquePort(data: DataShip[], key: string): string[] {
        const uniqArr = [ ...new Set(data.map((item) => item[key])) ];
        return uniqArr;
    }
}
