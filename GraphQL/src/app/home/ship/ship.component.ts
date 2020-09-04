import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Ship, DShip } from '../interface';

@Component({
    selector: 'app-ship',
    templateUrl: './ship.component.html',
    styleUrls: [ './ship.component.scss' ]
})
export class ShipComponent implements OnInit {
    data: Ship;
    ship: DShip;
    loading = true;
    error: any;
    id: string;
    missionsStr = '';
    label = {
        name: 'Название',
        port: 'Порт',
        type: 'Тип',
        weight: 'Вес',
        year: 'Год',
        missions: 'Миссии'
    };
    constructor(private route: ActivatedRoute, private router: Router, private apollo: Apollo) {}

    goToHome() {
        this.router.navigateByUrl('home-page');
    }

    ngOnInit() {
        console.log('ShipComponent -> constructor -> this.loading', this.loading);

        this.route.paramMap.subscribe((params) => (this.id = params.get('id')));
        this.apollo
            .watchQuery({
                query: gql`{
                    ship(id: "${this.id}") {
                    name
                    type
                    weight_kg
                    home_port
                    year_built
                    missions {
                      name
                    }
                  }
                }`
            })
            .valueChanges.subscribe(({ data, errors, loading }) => {
                this.data = data;
                this.ship = this.data.ship;
                this.error = errors;
                this.loading = loading;
                this.ship.missions.forEach((el) => (this.missionsStr += el.name + ', '));
            });
    }
}
