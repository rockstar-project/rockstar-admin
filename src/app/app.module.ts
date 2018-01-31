import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MetadataModule } from './metadata/metadata.module';
import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared';

import { MetadataResolve } from './metadata/metadata.resolve';
import { MetadataService } from './metadata/metadata.service';
import { ProductsResolve } from './product/product.resolve';
import { ProductService } from './product/product.service';
import { AuthGuard, AuthService} from './shared';

import {
  MatSlideToggleModule,
  MatButtonModule,
  MatSidenavModule,
  MatCardModule,
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
} from '@angular/material';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MetadataModule,
    HttpClientModule,
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
    CdkTableModule,
    MatDialogModule,
    OverlayModule,
    FormsModule,
    ProductModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ProductService,
    ProductsResolve,
    MetadataService,
    MetadataResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
