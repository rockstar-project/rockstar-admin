import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MetadataModule } from './metadata/metadata.module';
import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { MetadataResolve } from './metadata/metadata.resolve';
import { MetadataService } from './metadata/metadata.service';
import { ProductsResolve } from './product/product.resolve';
import { ProductService } from './product/product.service';
import { AuthGuard, AuthService} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MetadataModule,
    HttpClientModule,
    NgbModule.forRoot(),
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
