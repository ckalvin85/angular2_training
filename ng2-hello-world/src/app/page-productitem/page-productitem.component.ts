import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
import {Product } from '../shared/interfaces/product.interface';
import {Subscription } from 'rxjs';
import {ProductService} from '../service';

@Component({
    selector: 'page-productitem-1',
    templateUrl: './page-productitem.component.html',
    // styles: [`h1 {color:green}`],
    styleUrls: ['./page-productitem.component.css'],
    encapsulation: ViewEncapsulation.None


})

export class PageProductItemComponent  implements OnInit  {
    public id: number;
    public product : Product;
    private subscription: Subscription;

    constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    }



    ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.params.subscribe(
      param => {
        this.id = param['id'];
        console.log(this.id);
        this.productService.getProductById(this.id).subscribe(x=> {
            console.log(x);
            this.product = x
        });
      });
  }

    // getProduct() {
    //     const url = "/assets/product.json";
    //     this.http.get(url)
    //         .map(x => x.json())
    //         .subscribe((result: Product[]) => {
    //          this.product = result.find(x=>x.id == this.id);
    //             console.log(this.product)
    //         })

    //         , error => { console.log(error) };
    // }
    


}