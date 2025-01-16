import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,private location: Location
  ) {}

  ngOnInit(): void {
    // Retrieve the product ID from the route
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }
  goBack(): void {
    this.location.back(); // Navigate back to the previous page
  }
}
