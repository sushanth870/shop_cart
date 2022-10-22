import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
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
  logout(){
    console.log('inside lg1');
    this.auth.logout();
  }
}
