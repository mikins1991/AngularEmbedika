// import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

// export const HomeRoutes: Routes = [ { path: 'home-page', component: HomeComponent } ];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipComponent } from './ship/ship.component';

const routes: Routes = [
    {
        path: 'home-page',
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: ':id',
                component: ShipComponent,
                data: {
                    defaultName: 'Juri'
                }
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PeopleRoutingModule {}
