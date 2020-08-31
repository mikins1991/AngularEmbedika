import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TableListModule } from './table-list/table-list.module';
import { FiltersModule } from './filters/filters.module';

@NgModule({
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    imports: [ CommonModule, TableListModule, FiltersModule ]
})
export class HomeModule {}
