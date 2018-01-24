import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductSearchComponent } from './search/search.component';
import { ProductsResolve } from './product.resolve';

export const ProductRoutes: Routes = [
    {
        path: 'product',
        component: ProductComponent,
        children: [
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full'
            },
            {
                path: 'search',
                component: ProductSearchComponent,
                resolve: {
                    product: ProductsResolve
                }
            }
        ]
    }
]