import { Component ,OnInit} from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery = '';
  selectedCategory = '';
  pageSize = 12; // Number of products per page
  currentPage = 1; // Current page
  totalPages = 1; // Total number of pages

  constructor(private productService: ProductService, private cartService: CartService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data; // Ensure that data is assigned to both arrays
      this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize); // Calculate total pages
    });
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedCategory === '' || product.category === this.selectedCategory)
    );
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize); // Recalculate total pages after filtering
    this.currentPage = 1; // Reset to the first page after filtering
  }

  // Get the products to display on the current page
  getPagedProducts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  // Change to a specific page
  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  
    this._snackBar.open(
      `${product.name} has been added to the cart!`, // Display product name in the message
      'Ok!', 
      {
        verticalPosition: 'bottom',
        horizontalPosition: 'start',
        duration: 2000,
        panelClass: ['custom-snackbar'] // Apply the custom CSS class here
      }
    );
  }
}
