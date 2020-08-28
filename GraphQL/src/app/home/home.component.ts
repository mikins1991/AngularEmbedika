import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    data: any;
    loading = true;
    error: any;

    constructor(private apollo: Apollo) {}

    GET_ROCKETS_SHIPS = gql`
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

    ngOnInit() {
        this.apollo
            .watchQuery({
                query: this.GET_ROCKETS_SHIPS
            })
            .valueChanges.subscribe(({ data, errors, loading }) => {
                this.data = data;
                this.error = errors;
                this.loading = loading;
            });
    }
}
