import { Component,OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import { Product } from '../product.service';
import { ProductService } from '../product.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [TableModule,CurrencyPipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products:Array<Product> =[];
  constructor(public ProductService:ProductService ){}
  ngOnInit(): void{
   this.ProductService.getProducts().subscribe((response:Array<Product>) =>{
    this.products=response;
  });
  } 

}
