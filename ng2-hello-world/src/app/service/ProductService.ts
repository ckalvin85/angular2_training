import { Http } from '@angular/http';
import {Product } from '../shared/interfaces/product.interface';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class ProductService {
    baseUrl: string = "http://shangyilim-inventory.azurewebsites.net/api/";
    constructor(private http: Http) {

    }
    getProducts() : Observable<Product[]>{
        
        const url = this.baseUrl + "product";
        return this.http.get(url)
            .map(x => x.json());
    }

    getProductById(id)  {
        const url = this.baseUrl + "product/" + id;
        return this.http.get(url)
            .map(x => x.json());
        
    }

    // getProductById(id)  {
    //     const findById = (products) => Observable
    //     .from(products)
    //     .find((x: Product) => x.id == id);

    //     return this.getProducts()
    //     .flatMap(x=> findById(id))
        
    // }
    
}