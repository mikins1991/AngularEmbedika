import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TableListModule } from './table-list/table-list.module';
import { FiltersModule } from './filters/filters.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    imports: [ CommonModule, TableListModule, FiltersModule, RouterModule ]
})
export class HomeModule {}
