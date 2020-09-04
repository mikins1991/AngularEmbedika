import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { UniqueHelper } from './helpers/unique.helper';
import { Data } from './interface';
import { FilterHelper } from './helpers/filter.helper';
import { strict } from 'assert';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    data: Data;
    dataSortPort: string[];
    dataSortType: string[];
    loading = true;
    error: any;
    searchValue: string;
    dataFilter: any = [];
    filterType: string;
    activeFilterPort: string[];
    activeFilterType: string;
    readonly GET_ROCKETS_SHIPS = gql`
        {
            ships {
                weight_kg
                type
                model
                id
                home_port
                name
            }
        }
    `;

    constructor(private apollo: Apollo) {}

    onSearch(event: string): void {
        this.searchValue = event;
    }

    onCheckPort(items: string[]): void {
        this.persistFilterType(items, 'filterPort');
        this.activeFilterPort = this.restoreFilterType('filterPort');
        this.dataFilter = FilterHelper.getFiterData(this.data.ships, this.activeFilterPort, this.activeFilterType);
    }

    onCheckType(event: string): void {
        this.persistFilterType(event, 'type');
        this.activeFilterType = this.restoreFilterType('type');
        this.dataFilter = FilterHelper.getFiterData(this.data.ships, this.activeFilterPort, this.activeFilterType);
    }

    persistFilterType(type: string|string[], name: string) {
        sessionStorage.setItem(name, JSON.stringify(type));
    }

    restoreFilterType(name: string) {
        return JSON.parse(sessionStorage.getItem(name));
    }

    ngOnInit() {
        this.apollo
            .watchQuery({
                query: this.GET_ROCKETS_SHIPS
            })
            .valueChanges.subscribe(({ data, errors, loading }) => {
                this.data = data;
                this.dataSortPort = UniqueHelper.getUniquePort(this.data.ships, 'home_port');
                this.activeFilterPort = this.restoreFilterType('filterPort');
                this.dataSortType = UniqueHelper.getUniquePort(this.data.ships, 'type');
                this.activeFilterType = this.restoreFilterType('type');
                this.error = errors;
                this.loading = loading;

                if (this.activeFilterPort) {
                    this.dataFilter = FilterHelper.getFiterData(this.data.ships, this.activeFilterPort, this.activeFilterType);
                    return;
                }else {
                this.persistFilterType(this.dataSortType[0], 'type');
                this.onCheckPort(this.dataSortPort);
                }
            });
    }
}
