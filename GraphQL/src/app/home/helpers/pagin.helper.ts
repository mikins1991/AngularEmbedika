export class PaginHelper {
    static getPagin(totalItems: number, currentPage: number = 1) {
        const pageSize = 5;
        const startPage = 1;
        const endPage = Math.ceil(totalItems / pageSize);
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        return {
            totalItems,
            currentPage,
            pageSize,
            startPage,
            endPage,
            startIndex,
            endIndex
        };
    }
}
