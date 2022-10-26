import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService,private _cartService: CartService) { }

  public totalItems:number=0;

  ngOnInit(): void {
    this._cartService.getProducts().subscribe(res=>{
      this.totalItems=res.length;
    })

  }

  goToHome(){
    this.router.navigate(['home'])
  }
  goToMens(){
    this.router.navigate(['mens'])
  }
  goToElectronics(){
    this.router.navigate(['electronics'])
  }
  goToCart(){
    this.router.navigate(['cart'])
  }
  logout(){
    this.auth.logout();
  }

}
