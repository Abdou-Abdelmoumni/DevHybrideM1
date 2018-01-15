import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'page-home',
  templateUrl: 'items.html'
})
export class ItemsPage {

  products : Product[];

  constructor(public navCtrl: NavController, navParams: NavParams,  private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  addProduct(product: Product){
    this.productService.addProduct(product);
  }
}
