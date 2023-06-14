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
  desktop:boolean = true;
  constructor(private router: Router,private _cartService: CartService) { }

  ngOnInit(): void {
this._cartService.getProducts().subscribe((res: any)=>{
  this.products = res;
  this.grandTotal= this._cartService.getTotalPrice();
// if(window.screen.width>480){
//   this.desktop=true;
// }
// else{
//   this.desktop=false;
// }

window.onresize = () => this.desktop = window.screen.width > 480;

// console.log(this.grandTotal)
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
