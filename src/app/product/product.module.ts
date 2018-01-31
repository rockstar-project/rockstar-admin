import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutes as routes } from './product.routing';
import { MatCardModule } from '@angular/material';
import { ProductComponent } from './product.component';
import { ProductSearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ProductComponent,
        CardComponent,
        ProductSearchComponent
    ]
})
export class ProductModule { }
