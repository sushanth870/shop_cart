import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { Products } from '../services/classes/products';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  listElectronicsProducts: Products[];
  constructor(private _freeApiService: freeApiService) {}

  ngOnInit() {
    this._freeApiService.getAllElectronicsProducts().subscribe((products) => {
      this.listElectronicsProducts = products;
    });
  }
  

}
