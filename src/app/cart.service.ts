import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}

  getShippingPrices() {
    return this.http.get<{name: string, price: number, description: string}[]>('/assets/shipping.json');
  }

  addToCart(product: Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
