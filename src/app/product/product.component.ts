import { Component, Input } from '@angular/core';
import { products, Product } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
 
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

