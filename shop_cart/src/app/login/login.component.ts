import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // login(){
  //   console.log(this.registerForm.value.email);
  //     this.errorMsg="";
  //     let res=this.auth.login(this.registerForm.value.email,this.registerForm.value.password);
  //     if(res===200){
  //       console.log("inside login 200");
  //       this.router.navigate(['home']);
  //     }
  //     if(res===403){
  //       this.errorMsg="Invalid Credentials";
  //       console.log("inside login 403");

  //       this.router.navigate(['login']);
  //     }
  //   }
  ngOnInit() {}
  
  title = 'angularvalidate';
  errorMsg = '';
  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  get user() {
    return this.loginForm.get('user');
  }
  get password() {
    return this.loginForm.get('password');
  }
  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}


  Submit() {
    console.log(this.loginForm.value.user);
    console.log(this.errorMsg);

    let usernames = this.loginForm.value.user;
    let pass = this.loginForm.value.password;
    let res = this.auth.login(usernames, pass);
    if (res === 200) {
      this.router.navigate(['home']);
    }
    if (res === 403) {
      this.errorMsg = 'Invalid Credentials';
      console.log('inside login 403');

      this.router.navigate(['login']);
    }
  }
}
