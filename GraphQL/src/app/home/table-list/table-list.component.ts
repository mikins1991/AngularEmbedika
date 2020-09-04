import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaginHelper } from '../helpers/pagin.helper';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'table-list',
    templateUrl: './table-list.component.html',
    styleUrls: [ './table-list.component.scss' ]
})
export class TableListComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() searchValue: string;

    constructor() {}
    pagePag: any = {};
    pagedItems: any[];

    setPage(page: number): void {
        if (page < 1 || page > this.pagePag.totalPages) {
            return;
        }

        this.pagePag = PaginHelper.getPagin(this.data.length, page);
        this.pagedItems = this.data.slice(this.pagePag.startIndex, this.pagePag.endIndex + 1);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data && changes.data.currentValue) {
            this.setPage(1);
        }
    }

    ngOnInit(): void {}
}
