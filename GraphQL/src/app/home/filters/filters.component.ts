import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'filters',
    templateUrl: './filters.component.html',
    styleUrls: [ './filters.component.scss' ]
})
export class FiltersComponent implements OnInit, OnChanges {
    @Input() dataPort;
    @Input() dataSortType: string[];
    @Output() search = new EventEmitter<string>();
    @Output() checkPort = new EventEmitter<string>();
    @Output() checkType = new EventEmitter<string>();

    checkValue: number;
    show: boolean;
    portCheck: { name: string; checked: boolean }[] = [];
    portValue: string;
    label = {
        filter: 'Фильтры',
        name: 'Название',
        port: 'Порт',
        type: 'Тип'
    };
    unitTrustsPnl: string;
    constructor() {}

    onCheckboxChange(name: string, isChecked: boolean): void {
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
        this.portValue = this.checkValue > 0 ? `Выбрано ${this.checkValue}` : '';

        this.checkPort.emit(this.dataPort);
    }

    onRadioChange(item): void {
        this.checkType.emit(item);
        console.log('FiltersComponent -> onRadioChange -> item', item);
    }

    onSearchCustomer(event): void {
        this.search.emit(event);
    }

    suggest(): void {
        this.show = !this.show;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dataPort && changes.dataPort.currentValue) {
            this.portCheck = this.dataPort.map((elem) => (elem = { name: elem, checked: true }));
            this.checkValue = this.portCheck.length;
            this.portValue = this.checkValue > 0 ? `Выбрано ${this.checkValue}` : '';
        }
        if (changes.dataSortType && changes.dataSortType.currentValue) {
            this.unitTrustsPnl = this.dataSortType[0];
        }
    }

    ngOnInit(): void {}
}
