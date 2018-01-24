import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MetadataModule } from './metadata/metadata.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashoard.component';

import {
  AuthGuard,
  MetadataService,
  AuthService,
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetadataModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    MetadataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
