import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  private cartList: Product[];

  constructor(public navCtrl: NavController, private productService: ProductService) {
  }

  ngOnInit() {
  this.getProducts();
}

  getProducts(): void {
    this.productService.getCartItems()
      .subscribe(cartList => this.cartList = cartList);
  }

  deleteProduct(product: Product): void{
    this.productService.deleteProduct(product);
  }
}
