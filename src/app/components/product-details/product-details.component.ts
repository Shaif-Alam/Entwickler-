import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { Location } from '@angular/common';
import { CartService } from 'src/app/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,private location: Location,private cartService: CartService, private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }
  goBack(): void {
    this.location.back(); 
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  
    this._snackBar.open(
      `${product.name} has been added to the cart!`, 
      'Ok!', 
      {
        verticalPosition: 'bottom',
        horizontalPosition: 'start',
        duration: 2000,
        panelClass: ['custom-snackbar'] 
      }
    );
  }
}
