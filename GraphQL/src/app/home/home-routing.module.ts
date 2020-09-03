import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ShipComponent } from './ship/ship.component';

const homeRoutes: Routes = [
    { path: 'home-page', component: HomeComponent },
    { path: 'home-page/:id', component: ShipComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(homeRoutes) ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {}
