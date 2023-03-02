import { Component, Input, OnInit } from '@angular/core';
import { products, Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent {

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('El producto ha sido agregado al carrito de compras!');
  }
 
  products = [...products];
  @Input() product!:Product;

  share() {
    window.alert('El producto ha sido compartido');
  }

  onNotify() {
    window.alert('Se le notificará cuando el producto salga a la venta');
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  
}

