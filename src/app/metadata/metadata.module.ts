import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MetadataRoutes as routes } from './metadata.routing';

import { MetadataComponent } from './metadata.component';
import { MetadataSearchComponent } from './search/search.component';
import { MetadataDetailsComponent } from './details/details.component';
import { MetadataNewComponent } from './new/new.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MetadataComponent,
        MetadataSearchComponent,
        MetadataDetailsComponent,
        MetadataNewComponent
    ]
})
export class MetadataModule { }
