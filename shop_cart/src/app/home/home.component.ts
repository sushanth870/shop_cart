import { Component, OnInit } from '@angular/core';
import { Products } from '../services/classes/products';
import { freeApiService } from '../services/freeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listProducts: Products[];
  constructor(private _freeApiService: freeApiService) {}

  ngOnInit() {
    this._freeApiService.getproducts().subscribe((products) => {
      this.listProducts = products;
    });
  }
}
