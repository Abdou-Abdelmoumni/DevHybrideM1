import {Product} from '../models/product';
import {Injectable} from "@angular/core";
import {PRODUCTS} from "../models/mock-product-list";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {
  productsList = PRODUCTS;
  cartList: Product[] = [];

  constructor() { }

  getProducts():  Observable<Product[]> {
    return of(this.productsList);
  }

  getCartItems():  Observable<Product[]> {
    return of(this.cartList);
  }

  addProduct(product: Product) {
    this.cartList.push(product);
  }

  deleteProduct(product: Product){
    this.cartList.splice(this.cartList.indexOf(product),1);
  }
}
