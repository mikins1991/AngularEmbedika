export class UniqueHelper {
    static getUniquePort(data: any) {
        return [ ...new Set(data.map((item) => item.home_port)) ];
    }
}
