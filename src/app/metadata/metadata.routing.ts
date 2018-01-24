import { Routes } from '@angular/router';

import { MetadataComponent } from './metadata.component';
import { MetadataSearchComponent } from './search/search.component';
import { MetadataDetailsComponent } from './details/details.component';
import { MetadataNewComponent } from './new/new.component';
import { MetadataResolve } from './metadata.resolve';

export const MetadataRoutes: Routes = [
    {
        path: 'metadata',
        component: MetadataComponent,
        children: [
            {
                path: '',
                redirectTo: 'search',
                pathMatch: 'full'
            },
            {
                path: 'search',
                component: MetadataSearchComponent,
                resolve: {
                    metadata: MetadataResolve
                }
            },
            {
                path: ':id',
                component: MetadataDetailsComponent
            },
            {
                path: 'new',
                component: MetadataNewComponent
            }
        ]
    }
]