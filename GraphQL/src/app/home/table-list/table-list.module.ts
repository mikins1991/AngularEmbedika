import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { SearchPipe } from './search.pipe';

@NgModule({
    declarations: [ TableListComponent, SearchPipe ],
    imports: [ CommonModule ],
    exports: [ TableListComponent ]
})
export class TableListModule {}
