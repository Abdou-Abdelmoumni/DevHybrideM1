import { Component } from '@angular/core';

import {CartPage} from '../cart/cart';
import {ItemsPage} from '../items/items';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ItemsPage;
  tab2Root = CartPage;

  constructor() {

  }
}
