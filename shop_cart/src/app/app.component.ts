import { Component } from '@angular/core';
import { freeApiService } from './services/freeapi.service';
import { completeProducts } from './services/classes/completeProducts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shop_cart';
  // loginCheck : any;

  listAllProducts: completeProducts[];
  constructor(private _freeApiService: freeApiService,private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.loginCheck = this.activatedRoute.snapshot.url;
    // console.log(this.loginCheck);
    this._freeApiService.getproducts().subscribe((allProducts) => {
      this.listAllProducts = allProducts;
    });
  }
}
