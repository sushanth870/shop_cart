import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { completeProducts } from './services/classes/completeProducts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shop_cart';

  listAllProducts: completeProducts[];
  constructor(private _freeApiService: freeApiService) {}

  ngOnInit() {
    this._freeApiService.getproducts().subscribe((allProducts) => {
      this.listAllProducts = allProducts;
    });
  }
}
