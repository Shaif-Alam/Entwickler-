import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private cartItems: { product: Product; quantity: number }[] = []; 


  addToCart(product: Product): void {
    let existingProduct = this.cartItems.find(item => item.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; 
    } else {
      this.cartItems.push({ product, quantity: 1 }); 
    }
  }

  getCartItems(): { product: Product; quantity: number }[] {
    return this.cartItems;
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }


  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.product.id === productId);
    if (item) {
      item.quantity = quantity; 
    }
  }


  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}
