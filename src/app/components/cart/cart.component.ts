import { Component ,OnInit} from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { product: Product; quantity: number }[] = []; 
  totalPrice: number = 0;

  constructor(private cartService: CartService, private location: Location) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems(); 
    this.totalPrice = this.cartService.getTotalPrice(); 
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeFromCart(productId: number) {
    // Remove the product from the cart service
    this.cartService.removeFromCart(productId);
  
    // Update the cart items array and total price
    this.cartItems = this.cartService.getCartItems(); // Ensure the cart items are updated
    this.totalPrice = this.cartService.getTotalPrice(); // Recalculate the total price
  }

  goBack(): void {
    this.location.back(); // Navigate back to the previous page
  }
}
