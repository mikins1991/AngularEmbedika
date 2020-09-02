import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-ship',
    templateUrl: './ship.component.html',
    styleUrls: [ './ship.component.scss' ]
})
export class ShipComponent implements OnInit {
    id: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe((params) => (this.id = +params.get('id')));
        // this.id = +this.route.snapshot.paramMap.get('id'); // not working!
    }
}
