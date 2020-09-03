import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { SearchPipe } from './search.pipe';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from '../home-routing.module';

@NgModule({
    declarations: [ TableListComponent, SearchPipe ],
    imports: [ CommonModule, RouterModule, HomeRoutingModule ],
    exports: [ TableListComponent ]
})
export class TableListModule {}
