import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'filters',
    templateUrl: './filters.component.html',
    styleUrls: [ './filters.component.scss' ]
})
export class FiltersComponent implements OnInit, OnChanges {
    @Input() dataPort;
    @Output() search = new EventEmitter<string>();
    @Output() checkPort = new EventEmitter<string[]>();

    checkValue: number;
    show: boolean;
    portCheck: { name: string; checked: boolean }[] = [];
    labelName: boolean;
    constructor() {}

    onChange(name: string, isChecked: boolean) {
        this.portCheck.map((item) => {
            if (item.name === name) {
                item.checked = isChecked;
            }
            return item;
        });

        if (isChecked) {
            this.dataPort.push(name);
            this.checkValue += 1;
        } else {
            let index = this.dataPort.indexOf(name);
            this.dataPort.splice(index, 1);
            this.checkValue -= 1;
        }
        this.checkPort.emit(this.dataPort);
    }

    onSearchCustomer(event): void {
        this.search.emit(event);
        this.labelName = event.length > 0;
    }

    suggest(): void {
        this.show = !this.show;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dataPort && changes.dataPort.currentValue) {
            this.portCheck = this.dataPort.map((elem) => (elem = { name: elem, checked: true }));
            this.checkValue = this.portCheck.length;
        }
    }

    ngOnInit(): void {}
}
