import { Routes } from '@angular/router';

import { MetadataComponent } from './metadata.component';
import { MetadataSearchComponent } from './search/search.component';
import { MetadataDetailsComponent } from './details/details.component';
import { MetadataNewComponent } from './new/new.component';
import { MetadataResolve } from './metadata.resolve';
import { MetadataListComponent } from './list/list.component';

export const MetadataRoutes: Routes = [
    {
        path: 'metadata',
        component: MetadataComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: MetadataListComponent,
                resolve: {
                    metadata: MetadataResolve
                }
            },
            {
                path: 'search',
                component: MetadataSearchComponent,
                resolve: {
                    metadata: MetadataResolve
                }
            },
            {
                path: 'details/:id',
                component: MetadataDetailsComponent
            },
            {
                path: 'new',
                component: MetadataNewComponent
            }
        ]
    }
]