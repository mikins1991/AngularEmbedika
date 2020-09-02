import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipComponent } from './ship.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [ ShipComponent ],
    exports: [ ShipComponent ],
    imports: [ CommonModule, BrowserModule ]
})
export class ShipModule {}
