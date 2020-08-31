import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { UniqueHelper } from './helpers/unique.helper';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    data: any;
    dataPort;
    loading = true;
    error: any;
    searchValue: string;
    dataFilter: any = [];

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
        this.dataFilter = [];
        items.forEach((item) => {
            this.data.ships.forEach((elem) => {
                if (elem.home_port === item) {
                    this.dataFilter.push(elem);
                }
            });
        });
    }

    ngOnInit() {
        this.apollo
            .watchQuery({
                query: this.GET_ROCKETS_SHIPS
            })
            .valueChanges.subscribe(({ data, errors, loading }) => {
                this.data = data;
                this.dataPort = UniqueHelper.getUniquePort(this.data.ships);
                this.onCheckPort(this.dataPort);
                this.error = errors;
                this.loading = loading;
            });
    }
}
