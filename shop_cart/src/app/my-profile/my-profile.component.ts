import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  public products : any =[];
  public grandTotal : number = 0 ;
  
  public selectCategory:string="myOrders";
  desktop:boolean = true;


  constructor(private router: Router,private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal= this._cartService.getTotalPrice();
    // console.log(this.grandTotal)
    window.onresize = () => this.desktop = window.screen.width > 480;

    })
    
      }
      selectMyCart() {
        this.selectCategory='myCart';
      }
      selectMyOrders() {
        this.selectCategory='myOrders';
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
