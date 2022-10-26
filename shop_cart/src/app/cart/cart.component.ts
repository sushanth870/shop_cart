import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any =[];
  public grandTotal : number = 0 ;

  constructor(private router: Router,private _cartService: CartService) { }

  ngOnInit(): void {
this._cartService.getProducts().subscribe(res=>{
  this.products = res;
  this.grandTotal= this._cartService.getTotalPrice();
console.log(this.grandTotal)
})

  }
  removeItem(item: any){
    this._cartService.removeCartItem(item);
  }
  emptycart(){
    this._cartService.removeAllCart();
  }
  goToHome(){
    this.router.navigate(['home'])
  }

}
