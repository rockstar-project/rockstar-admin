import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductService } from './product.service';
import { ProductSearchResult, ProductSearchCriteria } from './product.model';

@Injectable()
export class ProductsResolve implements Resolve<ProductSearchResult> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductSearchResult> {
    return this.productService.getAllProducts();
  }

}