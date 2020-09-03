import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchName'
})
export class SearchPipe implements PipeTransform {
    transform(value: any, searchValue): any {
        if (!searchValue) return value;
        return value.filter((v) => v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    }
}
