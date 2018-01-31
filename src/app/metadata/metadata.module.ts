import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MetadataRoutes as routes } from './metadata.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { MetadataComponent } from './metadata.component';
import { MetadataSearchComponent } from './search/search.component';
import { MetadataDetailsComponent } from './details/details.component';
import { MetadataNewComponent } from './new/new.component';
import { MetadataListComponent } from './list/list.component';

import {
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatListModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatGridListModule,
    MatDialogModule,
    MAT_LABEL_GLOBAL_OPTIONS
  } from '@angular/material';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        Ng2SmartTableModule,
        RouterModule.forChild(routes),
        MatDividerModule,
        MatGridListModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatTabsModule,
        MatStepperModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatListModule,
        MatPaginatorModule,
        MatIconModule,
        MatProgressBarModule,
        MatInputModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatRadioModule,
        MatNativeDateModule,
        MatRippleModule,
        CdkAccordionModule,
        CdkTableModule
    ],
    declarations: [
        MetadataComponent,
        MetadataSearchComponent,
        MetadataDetailsComponent,
        MetadataNewComponent,
        MetadataListComponent
    ],
    providers: [
        {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
    ],
    entryComponents: [
        MetadataDetailsComponent
    ]
    
})
export class MetadataModule { }
