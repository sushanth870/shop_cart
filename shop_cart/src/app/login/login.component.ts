import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username="";
  password="";
  errorMsg="";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  
  login(){
    if(this.username.trim().length===0){
      console.log(this.username.trim().length)
      this.errorMsg="usernames required";
    }else if(this.password.trim().length===0){
      this.errorMsg="password required"
    }else{
      this.errorMsg="";
      let res=this.auth.login(this.username,this.password);
      if(res===200){
        this.router.navigate(['home']);
      }
      if(res===403){
        this.errorMsg="Invalid Credentials"
        this.router.navigate(['login']);
      }
    }
  }

}
