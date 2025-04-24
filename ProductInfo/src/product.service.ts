import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {UniqueComponentId} from 'primeng/utils';
import { Observable } from 'rxjs';

export interface Product{
  id?:string;
  name:string;
  quantity:number;
  price:number;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }
  createProduct(product:Product){
    product.id=UniqueComponentId('px-');
    return this.httpClient.post('http://localhost:5000/products',product);

  }
  getProducts():Observable<Array<Product>>{
    return this.httpClient.get('http://localhost:5000/products') as Observable<Array<Product>>;
  }
}
