import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { UniqueHelper } from './helpers/unique.helper';
import { Data } from './interface';
import { FilterHelper } from './helpers/filter.helper';

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
    filterPort: string[];
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
        this.filterPort = items;
        this.dataFilter = FilterHelper.getFiterData(this.data.ships, this.filterPort, this.filterType);
    }

    onCheckType(event: string): void {
        this.filterType = event;
        this.dataFilter = FilterHelper.getFiterData(this.data.ships, this.filterPort, this.filterType);
    }

    ngOnInit() {
        this.apollo
            .watchQuery({
                query: this.GET_ROCKETS_SHIPS
            })
            .valueChanges.subscribe(({ data, errors, loading }) => {
                this.data = data;
                this.dataSortPort = UniqueHelper.getUniquePort(this.data.ships, 'home_port');
                this.dataSortType = UniqueHelper.getUniquePort(this.data.ships, 'type');
                this.filterType = this.dataSortType[0];
                this.onCheckPort(this.dataSortPort);
                this.error = errors;
                this.loading = loading;
            });
    }
}
