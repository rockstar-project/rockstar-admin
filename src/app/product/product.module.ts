import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutes as routes } from './product.routing';

import { ProductComponent } from './product.component';
import { ProductSearchComponent } from './search/search.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ProductComponent,
        ProductSearchComponent
    ]
})
export class ProductModule { }
