import { Component } from '@angular/core';
import {Router,RouterOutlet} from '@angular/router';
import{
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
}from '@angular/forms';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  simpleForm: FormGroup;
  constructor(
    private fb:FormBuilder,
    public productService: ProductService,
    public router:Router
  ){
    this.simpleForm=this.fb.group({
      name:['',Validators.required],
      quantity:['',Validators.required],
      price:['',Validators.required],

    });
  }
  onSubmit() {
    this.simpleForm.markAllAsTouched();
  
    if (this.simpleForm.valid) {
      this.productService
        .createProduct(this.simpleForm.getRawValue())
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/products');
          },
          error: (err) => {
            console.error('Error creating product:', err);
          }
        });
    }
  }
}
