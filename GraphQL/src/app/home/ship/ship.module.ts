import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipComponent } from './ship.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ ShipComponent ],
    exports: [ ShipComponent ],
    imports: [ CommonModule, RouterModule ]
})
export class ShipModule {}
