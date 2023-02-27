import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { freeApiService } from '../services/freeapi.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


   productDetails:any;
   productId: any;

  constructor(private _freeApiService: freeApiService,private _cartService: CartService,private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this._freeApiService.getProductDetails(this.productId).subscribe((productdetails) => {
      this.productDetails = productdetails;
    });
  }
  addtocart(item: any) {
    this._cartService.addtoCart(item)
    alert(item.title + ' added to cart');
  }
}
