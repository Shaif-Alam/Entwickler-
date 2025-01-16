import { Injectable } from '@angular/core';
import { Product } from './product.model'; 
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone',
      price: 599,
      category: 'Electronics',
      description: 'Latest model with advanced features.',
      image: 'assets/electronic/phone.jpg',
    },
    {
      id: 2,
      name: 'Laptop',
      price: 999,
      category: 'Electronics',
      description: 'High-performance laptop with sleek design.',
      image: 'assets/electronic/laptop.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 120,
      category: 'Electronics',
      description: 'Noise-canceling headphones with great sound quality.',
      image: 'assets/electronic/c.jpg',
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 250,
      category: 'Electronics',
      description: 'Track your fitness and stay connected on the go.',
      image: 'assets/electronic/d.jpg',
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 80,
      category: 'Electronics',
      description: 'Portable speaker with rich sound quality.',
      image: 'assets/electronic/e.jpg',
    },
    {
      id: 6,
      name: 'Tablet',
      price: 499,
      category: 'Electronics',
      description: 'Sleek tablet with a stunning display and long battery life.',
      image: 'assets/electronic/tablet.jpg',
    },
    {
      id: 7,
      name: 'Digital Camera',
      price: 450,
      category: 'Electronics',
      description: 'Capture stunning photos with this digital camera.',
      image: 'assets/electronic/g.jpg',
    },
    {
      id: 8,
      name: 'Wireless Mouse',
      price: 30,
      category: 'Electronics',
      description: 'Ergonomic design for comfortable use.',
      image: 'assets/electronic/mouse.jpg',
    },
    {
      id: 9,
      name: 'Mouse',
      price: 40,
      category: 'Electronics',
      description: 'Adjustable mouse for a comfortable working position.',
      image: 'assets/electronic/mouse2.jpg',
    },
    {
      id: 10,
      name: 'Gaming Console',
      price: 400,
      category: 'Electronics',
      description: 'Next-gen gaming console with immersive gameplay.',
      image: 'assets/electronic/gaming.jpg',
    },
    {
      id: 11,
      name: 'T-shirt',
      price: 25,
      category: 'Clothing',
      description: 'Comfortable cotton T-shirt for everyday wear.',
      image: 'assets/cloth/tshirt2.jpg',
    },
    {
      id: 12,
      name: 'Casual Jeans',
      price: 40,
      category: 'Clothing',
      description: 'Stylish jeans for a relaxed look.',
      image: 'assets/cloth/jeans.jpg',
    },
    {
      id: 13,
      name: 'Leather Jacket',
      price: 120,
      category: 'Clothing',
      description: 'Trendy and durable leather jacket for colder months.',
      image: 'assets/cloth/jacket.jpg',
    },
    {
      id: 16,
      name: 'Summer Dress',
      price: 60,
      category: 'Clothing',
      description: 'Stylish and lightweight dress for the summer.',
      image: 'assets/cloth/summer.jpg',
    },
    {
      id: 15,
      name: 'Hoodie',
      price: 40,
      category: 'Clothing',
      description: 'Casual hoodie perfect for lounging or outdoor activities.',
      image: 'assets/cloth/hoodie.jpg',
    },
    {
      id: 16,
      name: 'Summer Dress',
      price: 60,
      category: 'Clothing',
      description: 'Stylish and lightweight dress for the summer.',
      image: 'assets/cloth/b.jpg',
    },
    {
      id: 17,
      name: 'Formal Shirt',
      price: 35,
      category: 'Clothing',
      description: 'Elegant shirt for professional occasions.',
      image: 'assets/cloth/shirt.jpg',
    },
    {
      id: 18,
      name: 'Mixer',
      price: 70,
      category: 'Home Appliances',
      description: 'Comfortable Mixer for outdoor runs and activities.',
      image: 'assets/cloth/h.jpg',
    },
    {
      id: 19,
      name: 'Winter Coat',
      price: 120,
      category: 'Clothing',
      description: 'Keep warm with this stylish winter coat.',
      image: 'assets/cloth/winterc.jpg',
    },
    {
      id: 20,
      name: 'Sunglasses',
      price: 40,
      category: 'Clothing',
      description: 'Protect your eyes with these trendy sunglasses.',
      image: 'assets/cloth/sunglasses.jpg',
    },
    {
      id: 21,
      name: 'Washing Machine',
      price: 350,
      category: 'Home Appliances',
      description: 'Energy-efficient washing machine with multiple settings.',
      image: 'assets/electronic/g.jpg',
    },
    {
      id: 22,
      name: 'Refrigerator',
      price: 800,
      category: 'Home Appliances',
      description: 'Spacious refrigerator with energy-saving features.',
      image: 'assets/electronic/f.jpg',
    },
    {
      id: 23,
      name: 'Dishwasher',
      price: 450,
      category: 'Home Appliances',
      description: 'High-quality dishwasher with multiple cleaning modes.',
      image: 'assets/electronic/dishwasher.jpg',
    },
    {
      id: 24,
      name: 'Microwave Oven',
      price: 150,
      category: 'Home Appliances',
      description: 'Compact microwave oven with multiple functions.',
      image: 'assets/electronic/micro.jpg',
    },
    {
      id: 25,
      name: 'Air Conditioner',
      price: 600,
      category: 'Home Appliances',
      description: 'Energy-efficient air conditioner for your home.',
      image: 'assets/electronic/aircondi.jpg',
    },
    {
      id: 26,
      name: 'Electric Kettle',
      price: 30,
      category: 'Home Appliances',
      description: 'Fast-boiling electric kettle for your kitchen.',
      image: 'assets/electronic/kettle.jpg',
    },
    {
      id: 27,
      name: 'Coffee Maker',
      price: 100,
      category: 'Home Appliances',
      description: 'Brew your favorite coffee with this efficient coffee maker.',
      image: 'assets/electronic/Coffe.jpg',
    },
    {
      id: 28,
      name: 'Blender',
      price: 60,
      category: 'Home Appliances',
      description: 'Smoothie blender with multiple speed settings.',
      image: 'assets/electronic/blender.jpg',
    },
    {
      id: 29,
      name: 'Vacuum Cleaner',
      price: 150,
      category: 'Home Appliances',
      description: 'Lightweight and powerful vacuum cleaner.',
      image: 'assets/electronic/vaccume cleaner.jpg',
    },
    {
      id: 30,
      name: 'Space Heater',
      price: 80,
      category: 'Home Appliances',
      description: 'Compact space heater for extra warmth during cold months.',
      image: 'assets/electronic/heater.jpg',
    },
    {
      id: 31,
      name: 'Smart Refrigerator',
      price: 1000,
      category: 'Home Appliances',
      description: 'Smart refrigerator with touch screen and voice controls.',
      image: 'assets/electronic/smartf.jpg',
    },
    {
      id: 32,
      name: 'Smart Thermostat',
      price: 120,
      category: 'Home Appliances',
      description: 'Adjust your home temperature from anywhere using your phone.',
      image: 'assets/electronic/smart.jpg',
    },
    {
      id: 33,
      name: 'Bluetooth Headphones',
      price: 90,
      category: 'Electronics',
      description: 'Wireless headphones with excellent sound quality.',
      image: 'assets/electronic/e.jpg',
    },
    {
      id: 34,
      name: 'Electric Toothbrush',
      price: 40,
      category: 'Electronics',
      description: 'Rechargeable toothbrush for a cleaner smile.',
      image: 'assets/electronic/brush.jpg',
    },
    {
      id: 35,
      name: 'Mini Projector',
      price: 200,
      category: 'Electronics',
      description: 'Portable mini projector for on-the-go entertainment.',
      image: 'assets/electronic/micro.jpg',
    },
    {
      id: 36,
      name: 'Portable Power Bank',
      price: 35,
      category: 'Electronics',
      description: 'Keep your devices charged with this portable power bank.',
      image: 'assets/electronic/powerbank.jpg',
    },
    {
      id: 37,
      name: 'Smart Light Bulb',
      price: 30,
      category: 'Electronics',
      description: 'Change the color and brightness of your lights remotely.',
      image: 'assets/electronic/bulb.jpg',
    },
    {
      id: 38,
      name: 'Bluetooth Headset',
      price: 60,
      category: 'Electronics',
      description: 'Hands-free communication with this Bluetooth headset.',
      image: 'assets/electronic/e.jpg',
    },
  ];


  
  

  getProducts() {
    return new Observable<Product[]>(observer => {
      observer.next(this.products);  
      observer.complete();
    });
  }
  getProductById(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return new Observable<Product>(observer => {
      if (product) {
        observer.next(product);
      } else {
        observer.error('Product not found');
      }
      observer.complete();
    });
  }
}
