import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private router: Router) { }

  login(uname: any, pword: any) {
    if(uname == 'Joy@gmail.com'&& pword=='123456')
    {
      return 200;
    }
    else{
      return 403;
    }
  }

  logout(){
    this.router.navigate(['login'])
  }
}
