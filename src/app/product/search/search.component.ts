import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { ProductSearchResult, ProductInfo } from './../product.model';
import { listAnimation } from '../../shared/index';

@Component({
  selector: 'app-product-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [ listAnimation ]
})
export class ProductSearchComponent implements OnInit {

    productSearchResult: ProductSearchResult;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.productSearchResult = this.route.snapshot.data['product'];
    }

    getTitle(item: ProductInfo, name: string) {
        if (item) {
            for (let current of item.attributes) {
                if (current.name === name) {
                    return current.title;
                }
            }
        }
    }

    getValue(item: ProductInfo, name: string) {
        if (item) {
            for (let current of item.attributes) {
                if (current.name === name) {
                    return current.value;
                }
            }
        }
    }

    getImage(item: ProductInfo, name: string) {
        if (item) {
            for (let current of item.attributes) {
                if (current.name === name) {
                    return current.image;
                }
            }
        }
    }

}