import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TableListModule } from './table-list/table-list.module';

@NgModule({
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    imports: [ CommonModule, TableListModule ]
})
export class HomeModule {}
