import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Product } from '../shared/interfaces/product.interface';
import {ProductService} from '../service';

@Component({
    selector: 'page-product-1',
    templateUrl: './page-product.component.html',
    // styles: [`h1 {color:green}`],
    styleUrls: ['./page-product.component.css']
})

export class PageProductsComponent implements OnInit {
    // private http: Http;

    // constructor(http: Http) {
    //     this.http = http;
    // }

    // public products : Product[];

    // ngOnInit() {
    //     this.getProducts();
    // }

    // getProducts() {
    //     const url = "/assets/product.json";
    //     this.http.get(url)
    //         .map(x => x.json())
    //         .subscribe(result => {
    //         this.products = result;
    //             console.log(this.products)
    //         })

    //         , error => { console.log(error) };
    // }
constructor(private productService: ProductService) {
        
    }
    public products : Product[];

    ngOnInit() {
         this.productService.getProducts().subscribe(x=>this.products =x);
    }
}