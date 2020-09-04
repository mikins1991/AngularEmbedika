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
    @Input() activeFilterPort: string[];
    @Input() activeFilterType: string;
    @Output() search = new EventEmitter<string>();
    @Output() checkPort = new EventEmitter<string[]>();
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
    activeType: string;
    changeDataPort = [];
    constructor() {}

    onCheckboxChange(name: string, isChecked: boolean): void {
        this.portCheck.map((item) => {
            if (item.name === name) {
                item.checked = isChecked;
            }
            return item;
        });

        if (isChecked) {
            this.changeDataPort.push(name);
            this.checkValue += 1;
        } else {
            const index = this.changeDataPort.indexOf(name);
            this.changeDataPort.splice(index, 1);
            this.checkValue -= 1;
        }
        this.portValue = this.checkValue > 0 ? `Выбрано ${this.checkValue}` : '';

        this.checkPort.emit(this.changeDataPort);
    }

    onRadioChange(item): void {
        this.checkType.emit(item);
    }

    onSearchCustomer(event): void {
        this.search.emit(event);
    }

    suggest(): void {
        this.show = !this.show;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dataPort && changes.dataPort.currentValue) {
            this.changeDataPort = [...this.dataPort];
            this.portCheck = this.dataPort.map((elem) => (elem = { name: elem, checked: true }));
            this.checkValue = this.portCheck.length;
            this.portValue = this.checkValue > 0 ? `Выбрано ${this.checkValue}` : '';
        }
        if (changes.activeFilterType && changes.activeFilterType.currentValue) {
            this.activeType = this.activeFilterType;
        }
        if ( changes.activeFilterPort && changes.activeFilterPort.currentValue ){
            let value = 0;
            this.portCheck = this.dataPort.map((elem) => {
                let bool = false;
                for (const port of this.activeFilterPort){
                    if (port === elem){
                        bool = true;
                        break;
                    }
                    bool = false;
                }
                if (bool){
                    value += 1;
                    return elem = { name: elem, checked: true };
                }
                return elem = { name: elem, checked: false };
            });
            this.portValue = value > 0 ? `Выбрано ${value}` : '';
        }
    }

    ngOnInit(): void {}
}
