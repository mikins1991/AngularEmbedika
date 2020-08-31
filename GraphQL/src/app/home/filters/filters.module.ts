import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ FiltersComponent ],
    imports: [ CommonModule, FormsModule ],
    exports: [ FiltersComponent ]
})
export class FiltersModule {}
